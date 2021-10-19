export type RegisterError =
  | { kind: 'RegisterValidationError'; data: string }
  | { kind: 'EmailAlreadyUsed' }
  | { kind: 'UsernameAlreadyUsed' }
