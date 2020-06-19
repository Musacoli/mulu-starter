import { Router } from 'express';

import { getChatRooms, getChatRoom, createChatRoom } from './chatRooms';

const router = Router()

router.post('/', createChatRoom)
router.get('/all', getChatRooms)
router.get('/:id', getChatRoom)

export default router;

