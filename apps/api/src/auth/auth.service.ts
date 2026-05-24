import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from 'bcrypt'
import type { JwtPayload } from './strategies/jwt.strategy'

const REFRESH_TTL_DAYS = 7

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    })
    if (existing) throw new ConflictException('Email already registered')

    const passwordHash = await bcrypt.hash(dto.password, 12)

    const user = await this.prisma.user.create({
      data: { email: dto.email, name: dto.name, passwordHash },
      select: { id: true, email: true, name: true, role: true },
    })

    return this.createSession(user.id, user.email, user.role, user)
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    })
    if (!user) throw new UnauthorizedException('Invalid credentials')

    const valid = await bcrypt.compare(dto.password, user.passwordHash)
    if (!valid) throw new UnauthorizedException('Invalid credentials')

    return this.createSession(user.id, user.email, user.role, {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  }

  async refresh(refreshToken: string) {
    let payload: JwtPayload
    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(refreshToken, {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      })
    } catch {
      throw new UnauthorizedException('Invalid refresh token')
    }

    const session = await this.prisma.session.findUnique({
      where: { refreshToken },
    })
    if (!session || session.expiresAt < new Date()) {
      if (session) {
        await this.prisma.session.delete({ where: { id: session.id } })
      }
      throw new UnauthorizedException('Session expired')
    }

    await this.prisma.session.delete({ where: { id: session.id } })

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, role: true },
    })
    if (!user) throw new UnauthorizedException('User not found')

    return this.createSession(user.id, user.email, user.role, user)
  }

  async logout(refreshToken: string | undefined) {
    if (!refreshToken) return
    await this.prisma.session.deleteMany({ where: { refreshToken } })
  }

  private async createSession(
    userId: string,
    email: string,
    role: string,
    user: { id: string; email: string; name: string; role: string },
  ) {
    const payload: JwtPayload = { sub: userId, email, role }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: this.config.get<string>('JWT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwt.signAsync(payload, {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: `${REFRESH_TTL_DAYS}d`,
      }),
    ])

    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TTL_DAYS)

    await this.prisma.session.create({
      data: { userId, refreshToken, expiresAt },
    })

    return { user, accessToken, refreshToken }
  }
}
