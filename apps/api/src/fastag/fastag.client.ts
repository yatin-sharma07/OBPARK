import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

export interface FastagBalance {
  vrn: string
  bank: string
  balance: number
  status: 'ACTIVE' | 'INACTIVE' | 'BLACKLISTED'
  tagId: string
}

@Injectable()
export class FastagClient {
  private readonly logger = new Logger(FastagClient.name)
  private readonly token: string | undefined

  constructor(private config: ConfigService) {
    this.token = config.get<string>('SUREPASS_API_TOKEN')
  }

  async getBalance(vrn: string): Promise<FastagBalance> {
    if (!this.token) {
      this.logger.warn(`No API token — returning mock FASTag balance for ${vrn}`)
      return this.getMockBalance(vrn)
    }

    try {
      const res = await fetch('https://kyc-api.surepass.io/api/v1/fastag/fastag', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_number: vrn }),
      })
      const data = await res.json()
      return {
        vrn,
        bank: data.data?.bank_name ?? 'Unknown',
        balance: parseFloat(data.data?.balance ?? '0'),
        status: data.data?.tag_status ?? 'INACTIVE',
        tagId: data.data?.tag_id ?? '',
      }
    } catch (err: any) {
      this.logger.error(`FASTag lookup failed for ${vrn}: ${err.message}`)
      return this.getMockBalance(vrn)
    }
  }

  private getMockBalance(vrn: string): FastagBalance {
    const seed = vrn.charCodeAt(vrn.length - 1)
    const balances = [450, 120, 0, 875, 230]
    const banks = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Paytm Payments Bank']
    return {
      vrn,
      bank: banks[seed % banks.length],
      balance: balances[seed % balances.length],
      status: 'ACTIVE',
      tagId: `TAG${vrn}${seed}`,
    }
  }
}