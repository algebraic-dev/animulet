import express from 'express'
import logger from './utils/logger'

export default () => {
  const app = express()

  app.listen(process.env.PORT, () => {
    logger.info(`🚀 Server running at port ${process.env.PORT}`)
  })
}
