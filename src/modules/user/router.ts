import { Router } from 'express'

import { register, login } from '@user/controllers/userController'

const router = Router()

router.post('/register', register)
router.post('/login', login)

export default router
