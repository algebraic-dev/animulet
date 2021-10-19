import { Either, right, left } from 'fp-ts/lib/Either'
import * as yup from 'yup'

export const validateBody = async <T>(
  info: Object,
  validate: yup.SchemaOf<T>
): Promise<Either<yup.ValidationError, T>> => {
  try {
    const res = await validate.validate(info)
    return right(res as T)
  } catch (err) {
    return left(err as yup.ValidationError)
  }
}
