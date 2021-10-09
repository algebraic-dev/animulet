export interface User {
  id?: string
  username: string
  password: string
  email: string
  description?: string | null
  birthDate?: Date | null
  createdAt?: Date
}
