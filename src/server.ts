import express from 'express'
import logger from '@utils/logger'
import userRoutes from '@user/router'

export default () => {
  const app = express()

  app.use(userRoutes)

  app.listen(process.env.PORT, () => {
    logger.info(`🚀 Server running at port ${process.env.PORT}`)
  })

  return app
}
