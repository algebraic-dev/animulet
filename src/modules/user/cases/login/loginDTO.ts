import { Either, isLeft, left, right } from 'fp-ts/lib/Either'
import * as yup from 'yup'

import { validateBody } from '@utils/validate'
import { LoginError } from './loginError'

export interface LoginDTO {
  login: string
  password: string
}

export const schema : yup.SchemaOf<LoginDTO> = yup.object().shape({
  login: yup.string().required().max(128),
  password: yup.string().min(8).max(128)
}).defined()

export const validateLoginDTO = async (obj : Object): Promise<Either<LoginError, LoginDTO>> => {
  const dto = await validateBody(obj, schema)
  if (isLeft(dto)) return left({ kind: 'InvalidLogin', data: dto.left.message })
  return right(dto.right as LoginDTO)
}
