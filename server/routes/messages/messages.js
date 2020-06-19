import modelHelper from '../../helpers/modelHelper';
import { Message } from '../../models'

const createMessage = async (req, res) => {

  const { message, user, chatRoom } = req.body

  try {
    const newMessage = await Message.create({
      message,
      user,
      chatRoom
    });

    return res.sendSuccess(newMessage, 'success', 201)
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const getMessage = async (req, res) => {
  const { id } = req.params;

  try {
    return await modelHelper.findById(
      Message,
      res,
      id,
      ['user', 'chatRoom']
    )

  } catch (e) {
    return res.sendError('An error has occurred', e)
  }

}

const getChatRoomMessages = async (req, res) => {
  const { chatRoom } = req.query;

  try {
    return await modelHelper.find(
      Message,
      res,
      'chatRoom',
      chatRoom,
      ['user', 'chatRoom']
    )

  } catch (e) {
    return res.sendError('An error has occurred', e)
  }

}

const getMessages = async (req, res) => {

  try {
    return await modelHelper.findAll(
      Message,
      res,
      ['user', 'chatRoom']
    );

  } catch (e) {
    return res.sendError('An error has occurred', e);
  }
}

export {
  createMessage,
  getMessage,
  getChatRoomMessages,
  getMessages
}
