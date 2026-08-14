import { api } from './api'

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

export async function refreshSession(): Promise<AuthResponse> {
  return api.post<AuthResponse>('/auth/refresh')
}

export async function logoutUser(): Promise<void> {
  await api.post('/auth/logout')
}
