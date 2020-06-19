import { Router } from 'express';

import { getChatRooms, getChatRoom, createChatRoom, createChatRoomMessage, createChatRoomParticipant } from './chatRooms';

const router = Router()

router.post('/', createChatRoom)
router.post('/message', createChatRoomMessage)
router.post('/participant', createChatRoomParticipant)
router.get('/all', getChatRooms)
router.get('/:id', getChatRoom)

export default router;

