export interface IncorrectPassword {
  kind: 'IncorrectPassword'
}

export type LoginError = IncorrectPassword
