import express from 'express'
import { login } from './controllers/userController'

const router = express.Router()

router.post('/login', login)

export default router
