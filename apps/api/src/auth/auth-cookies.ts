import type { Response } from 'express'
import { env } from '../config/env'

export const REFRESH_TOKEN_COOKIE = 'refreshToken'

const REFRESH_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000

export function setRefreshTokenCookie(res: Response, token: string) {
  res.cookie(REFRESH_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: REFRESH_MAX_AGE_MS,
  })
}

export function clearRefreshTokenCookie(res: Response) {
  res.clearCookie(REFRESH_TOKEN_COOKIE, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
}
