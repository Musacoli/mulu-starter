import modelHelper from '../../helpers/modelHelper'
import { ChatRoom, Message, User } from '../../models'

const createChatRoom = async (req, res) => {
  const { name, videoUrl, host } = req.body

  try {
    const newUser = await User.create({
      username: host,
    })

    const chatRoom = await ChatRoom.create({
      name,
      videoUrl,
      host: newUser._id,
      participants: [newUser._id],
    })

    return res.sendSuccess(chatRoom, 'success', 201)
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const createChatRoomMessage = async (req, res) => {
  const { chatRoomId, userId } = req.query
  const { message } = req.body

  try {
    const newMessage = await Message.create({
      message,
      user: userId,
      chatRoom: chatRoomId,
    })

    return await modelHelper.update(
      ChatRoom,
      res,
      chatRoomId,
      { messages: newMessage._id },
      ['messages'],
    )
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const createChatRoomParticipant = async (req, res) => {
  const { chatRoomId } = req.query

  const { username } = req.body

  try {
    const newUser = await User.create({
      username,
    })

    return await modelHelper.update(
      ChatRoom,
      res,
      chatRoomId,
      { participants: newUser._id },
      ['participants'],
    )
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const getChatRoom = async (req, res) => {
  const { chatRoomId } = req.query

  try {
    return await modelHelper.findById(ChatRoom, res, chatRoomId, [
      'host',
      'participants',
    ])
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const getChatRooms = async (req, res) => {
  try {
    return await modelHelper.findAll(ChatRoom, res, ['host'])
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

export {
  createChatRoom,
  createChatRoomMessage,
  createChatRoomParticipant,
  getChatRoom,
  getChatRooms,
}
