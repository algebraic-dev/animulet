import logger from '@utils/logger'
import app from './server'

const server = app()

server.listen(process.env.PORT, () => {
  logger.info(`🚀 Server running at port ${process.env.PORT}`)
})
