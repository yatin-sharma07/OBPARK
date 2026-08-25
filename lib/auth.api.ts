import { api } from './api'
import { useAuthStore } from '@/store/auth.store'


interface LoginPayload {
  firebaseIdToken: string
}

export interface AuthUser {
  id: string
  firebaseUid?: string
  email: string | null
  phoneNumber: string | null
  firstName: string | null
  lastName: string | null
  profileImage: string | null
}

interface AuthResponse {
  success: boolean
  message: string
  accessToken: string
  refreshToken: string
  user: AuthUser
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  return api.post<AuthResponse>('/auth/login', payload)
}

export async function refreshSession(refreshToken?: string): Promise<AuthResponse> {
  const token = refreshToken || useAuthStore.getState().refreshToken
  return api.post<AuthResponse>('/auth/refresh', { refreshToken: token })
}

export async function logoutUser(): Promise<void> {
  await api.post('/auth/logout')
}
