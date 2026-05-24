import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CacheHelper } from '../redis/cache.helper'
import { SurepassClient } from './surepass.client'
import { computeHealthScore } from './health-score.util'
import { AddVehicleDto } from './dto/add-vehicle.dto'
import { addHours } from 'date-fns'

const RC_CACHE_TTL = 60 * 60 * 24

@Injectable()
export class VehicleService {
  private readonly logger = new Logger(VehicleService.name)

  constructor(
    private prisma: PrismaService,
    private cache: CacheHelper,
    private surepass: SurepassClient,
  ) {}

  async addVehicle(userId: string, dto: AddVehicleDto) {
    const vrn = dto.vrn.toUpperCase().replace(/\s/g, '')
  
    // Check if vehicle exists — active or soft-deleted
    const existing = await this.prisma.vehicle.findUnique({
      where: { userId_vrn: { userId, vrn } },
    })
  
    if (existing) {
      if (existing.isActive) {
        // Genuinely already added
        throw new ConflictException('Vehicle already added to your account')
      }
  
      // Was soft-deleted — reactivate it instead of creating a new row
      const rcData = await this.getOrFetchRcData(vrn)
      const healthScore = computeHealthScore(rcData)
  
      const vehicle = await this.prisma.vehicle.update({
        where: { id: existing.id },
        data: { isActive: true },
      })
  
      // Refresh the RC lookup too
      await this.prisma.rcLookup.upsert({
        where: { vehicleId: vehicle.id },
        update: {
          rawData: rcData as any,
          insuranceExpiry: rcData.insuranceExpiry ? new Date(rcData.insuranceExpiry) : null,
          puccExpiry: rcData.puccExpiry ? new Date(rcData.puccExpiry) : null,
          fitnessExpiry: rcData.fitnessExpiry ? new Date(rcData.fitnessExpiry) : null,
          challanCount: rcData.challanCount,
          fastagActive: rcData.fastagActive,
          healthScore: healthScore.total,
          fetchedAt: new Date(),
          expiresAt: addHours(new Date(), 24),
        },
        create: {
          vehicleId: vehicle.id,
          vrn,
          rawData: rcData as any,
          insuranceExpiry: rcData.insuranceExpiry ? new Date(rcData.insuranceExpiry) : null,
          puccExpiry: rcData.puccExpiry ? new Date(rcData.puccExpiry) : null,
          fitnessExpiry: rcData.fitnessExpiry ? new Date(rcData.fitnessExpiry) : null,
          challanCount: rcData.challanCount,
          fastagActive: rcData.fastagActive,
          healthScore: healthScore.total,
          expiresAt: addHours(new Date(), 24),
        },
      })
  
      return this.formatVehicleResponse(vehicle, rcData, healthScore)
    }
  
    // Brand new vehicle — original create flow
    const rcData = await this.getOrFetchRcData(vrn)
    const healthScore = computeHealthScore(rcData)
  
    const vehicle = await this.prisma.vehicle.create({
      data: {
        userId,
        vrn,
        make: rcData.make,
        model: rcData.model,
        year: rcData.year,
        fuelType: rcData.fuelType as any,
        colour: rcData.colour,
      },
    })
  
    await this.prisma.rcLookup.create({
      data: {
        vehicleId: vehicle.id,
        vrn,
        rawData: rcData as any,
        insuranceExpiry: rcData.insuranceExpiry ? new Date(rcData.insuranceExpiry) : null,
        puccExpiry: rcData.puccExpiry ? new Date(rcData.puccExpiry) : null,
        fitnessExpiry: rcData.fitnessExpiry ? new Date(rcData.fitnessExpiry) : null,
        challanCount: rcData.challanCount,
        fastagActive: rcData.fastagActive,
        healthScore: healthScore.total,
        expiresAt: addHours(new Date(), 24),
      },
    })
  
    return this.formatVehicleResponse(vehicle, rcData, healthScore)
  }

  async getVehicles(userId: string) {
    const vehicles = await this.prisma.vehicle.findMany({
      where: { userId, isActive: true },
      include: { rcLookup: true },
      orderBy: { createdAt: 'desc' },
    })

    return Promise.all(
      vehicles.map(async (v) => {
        const rcData = await this.getOrFetchRcData(v.vrn)
        const healthScore = computeHealthScore(rcData)
        return this.formatVehicleResponse(v, rcData, healthScore)
      }),
    )
  }

  async deleteVehicle(userId: string, vehicleId: string) {
    const vehicle = await this.prisma.vehicle.findFirst({
      where: { id: vehicleId, userId },
    })
    if (!vehicle) throw new NotFoundException('Vehicle not found')

    await this.prisma.vehicle.update({
      where: { id: vehicleId },
      data: { isActive: false },
    })

    return { success: true }
  }

  private async getOrFetchRcData(vrn: string) {
    const cacheKey = `rc:${vrn}`
    return this.cache.getOrSet(cacheKey, RC_CACHE_TTL, () =>
      this.surepass.fetchRcData(vrn),
    )
  }

  private formatVehicleResponse(vehicle: any, rcData: any, healthScore: any) {
    return {
      id: vehicle.id,
      vrn: vehicle.vrn,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      fuelType: vehicle.fuelType,
      colour: vehicle.colour,
      owner: rcData.owner,
      healthScore: healthScore.total,
      scoreFactors: healthScore.factors,
      rcData: {
        insuranceExpiry: rcData.insuranceExpiry,
        puccExpiry: rcData.puccExpiry,
        fitnessExpiry: rcData.fitnessExpiry,
        challanCount: rcData.challanCount,
        fastagActive: rcData.fastagActive,
      },
    }
  }
}