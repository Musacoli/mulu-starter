import { Router } from 'express';

import { getChatRooms, getChatRoom, createChatRoom } from './chatRooms';

const router = Router()

router.post('/', createChatRoom)
router.get('/:id', getChatRoom)
router.get('/', getChatRooms)

export default router;

