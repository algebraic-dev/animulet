export interface IncorrectPassword {
  kind: 'IncorrectPassword'
}

export interface InvalidLogin {
  kind: 'InvalidLogin'
  data: string
}

export interface AccountNotExists {
  kind: 'AccountNotExists'
}

export type LoginError = IncorrectPassword | InvalidLogin | AccountNotExists
