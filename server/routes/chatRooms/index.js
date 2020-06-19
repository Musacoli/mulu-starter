import { Router } from 'express';

import { getChatRooms, getChatRoom, createChatRoom, createChatRoomMessage } from './chatRooms';

const router = Router()

router.post('/', createChatRoom)
router.post('/message', createChatRoomMessage)
router.get('/all', getChatRooms)
router.get('/:id', getChatRoom)

export default router;

