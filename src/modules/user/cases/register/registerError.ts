export interface EmailAlreadyUsed {
  kind: 'EmailAlreadyUsed'
}

export interface UsernameAlreadyUsed {
  kind: 'UsernameAlreadyUsed'
}

export type RegisterError = EmailAlreadyUsed | UsernameAlreadyUsed
