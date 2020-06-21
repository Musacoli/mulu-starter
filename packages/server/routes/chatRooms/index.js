import { Router } from 'express'

import {
  getChatRooms,
  getChatRoom,
  createChatRoom,
  createChatRoomMessage,
  createChatRoomParticipant,
} from './chatRooms'

const router = Router()

router.post('/', createChatRoom)
router.get('/', getChatRoom)
router.post('/message', createChatRoomMessage)
router.post('/participant', createChatRoomParticipant)
router.get('/all', getChatRooms)

export default router
