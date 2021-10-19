export interface EmailAlreadyUsed {
  kind: 'EmailAlreadyUsed'
}

export interface UsernameAlreadyUsed {
  kind: 'UsernameAlreadyUsed'
}

export interface RegisterValidationError {
  kind: 'RegisterValidationError',
  data: string
}

export type RegisterError = EmailAlreadyUsed | UsernameAlreadyUsed | RegisterValidationError
