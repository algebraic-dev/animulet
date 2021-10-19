export type LoginError =
  | { kind: 'AccountNotExists' }
  | { kind: 'InvalidLogin'; data: string }
  | { kind: 'IncorrectPassword' }
