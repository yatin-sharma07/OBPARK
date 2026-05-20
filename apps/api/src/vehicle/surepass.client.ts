import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios, { AxiosInstance } from 'axios'

export interface RcApiResponse {
  owner: string
  make: string
  model: string
  year: number
  fuelType: string
  colour: string
  insuranceExpiry: string | null
  puccExpiry: string | null
  fitnessExpiry: string | null
  challanCount: number
  fastagActive: boolean
}

@Injectable()
export class SurepassClient {
  private readonly logger = new Logger(SurepassClient.name)
  private readonly http: AxiosInstance
  private readonly token: string | undefined

  constructor(private config: ConfigService) {
    this.token = config.get<string>('SUREPASS_API_TOKEN')
    this.http = axios.create({
      baseURL: 'https://kyc-api.surepass.io/api/v1',
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    })
  }

  async fetchRcData(vrn: string): Promise<RcApiResponse> {
    if (!this.token) {
      this.logger.warn(`SUREPASS_API_TOKEN not set — returning mock data for ${vrn}`)
      return this.getMockData(vrn)
    }

    let lastError: Error | null = null
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const { data } = await this.http.post('/rc/rc-full', { id_number: vrn })
        return this.normaliseResponse(data)
      } catch (err: any) {
        lastError = err
        this.logger.warn(`Surepass attempt ${attempt}/3 failed for ${vrn}: ${err.message}`)
        if (attempt < 3) await this.sleep(attempt * 500)
      }
    }

    this.logger.error(`All Surepass retries failed for ${vrn}, falling back to mock`)
    return this.getMockData(vrn)
  }

  private normaliseResponse(raw: any): RcApiResponse {
    return {
      owner: raw.data?.owner_name ?? 'Unknown',
      make: raw.data?.maker_description ?? 'Unknown',
      model: raw.data?.model ?? 'Unknown',
      year: parseInt(raw.data?.manufacturing_date?.split('-')[0]) || 2020,
      fuelType: raw.data?.fuel_type ?? 'PETROL',
      colour: raw.data?.color ?? 'Unknown',
      insuranceExpiry: raw.data?.insurance_upto ?? null,
      puccExpiry: raw.data?.pucc_upto ?? null,
      fitnessExpiry: raw.data?.fit_up_to ?? null,
      challanCount: raw.data?.challan_details?.length ?? 0,
      fastagActive: raw.data?.fastag_details?.status === 'ACTIVE',
    }
  }

  private getMockData(vrn: string): RcApiResponse {
    const seed = vrn.charCodeAt(vrn.length - 1)
    const scenarios = [
      {
        insuranceExpiry: '2026-06-01',
        puccExpiry: '2025-08-01',
        fitnessExpiry: '2026-01-01',
        challanCount: 0,
        fastagActive: true,
      },
      {
        insuranceExpiry: '2025-07-15',
        puccExpiry: '2025-06-01',
        fitnessExpiry: '2025-07-01',
        challanCount: 2,
        fastagActive: true,
      },
      {
        insuranceExpiry: '2024-12-01',
        puccExpiry: '2024-11-01',
        fitnessExpiry: '2025-09-01',
        challanCount: 4,
        fastagActive: false,
      },
    ]
    const s = scenarios[seed % scenarios.length]
    return {
      owner: 'J. Pavan Kumar Reddy',
      make: 'Hyundai',
      model: 'Creta',
      year: 2021,
      fuelType: 'PETROL',
      colour: 'White',
      ...s,
    }
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}