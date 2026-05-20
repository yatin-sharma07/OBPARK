// Keep API on a dedicated port so frontend fallback port changes do not break auth calls.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'

export async function apiPost<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Something went wrong')
  }

  return res.json()
}

export async function apiGet<T>(endpoint: string, token?: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Something went wrong')
  }

  return res.json()
}