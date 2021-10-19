import { Either, isLeft, left, right } from 'fp-ts/lib/Either'
import * as yup from 'yup'

import { validateBody } from '@utils/validate'
import { RegisterValidationError } from './registerError'

export interface RegisterDTO {
  username: string,
  email: string,
  password: string
}

export const schema : yup.SchemaOf<RegisterDTO> = yup.object().shape({
  username: yup.string().required().max(128),
  email: yup.string().required().min(5).email().max(128),
  password: yup.string().min(8).max(128)
}).defined()

export const validateRegisterDTO = async (obj : Object): Promise<Either<RegisterValidationError, RegisterDTO>> => {
  const dto = await validateBody(obj, schema)
  if (isLeft(dto)) return left({ kind: 'RegisterValidationError', data: dto.left.message })
  return right(dto.right as RegisterDTO)
}
