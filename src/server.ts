import express from 'express'
import userRoutes from '@user/router'

export default () => {
  const app = express()

  app.use(express.json())
  app.use('/auth', userRoutes)

  return app
}
