import { Router } from 'express'

import {
  getMessages,
  getMessage,
  getChatRoomMessages,
  createMessage,
} from './messages'

const router = Router()

router.post('/', createMessage)
router.get('/all', getMessages)
router.get('/:id', getMessage)
router.get('/', getChatRoomMessages)

export default router
