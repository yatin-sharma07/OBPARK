import { api } from './api'

interface RegisterPayload {
  email: string
  password: string
  name: string
}

interface LoginPayload {
  email: string
  password: string
}

interface AuthResponse {
  user: {
    id: string
    email: string
    name: string
    role: 'CUSTOMER' | 'ADMIN'
  }
  accessToken: string
}

export async function registerUser(payload: RegisterPayload): Promise<AuthResponse> {
  return api.post<AuthResponse>('/auth/register', payload)
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  return api.post<AuthResponse>('/auth/login', payload)
}