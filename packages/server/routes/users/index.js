import { Router } from 'express'

import { getUsers, getUserById, getUserByUsername, createUser } from './users'

const router = Router()

router.post('/', createUser)
router.get('/all', getUsers)
router.get('/:id', getUserById)
router.get('/', getUserByUsername)

export default router
