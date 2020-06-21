import axios from 'axios'
import { socket } from 'utils'

const server = (options) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_MULU_SERVER_URL}/v1`,
  })

  return instance(options)
}

const api = {
  getChatRoom: (chatRoomId) => {
    const url = `/chatroom`

    return server({ url, params: { chatRoomId } })
  },

  getChatRoomMessages: (chatRoom) => {
    const url = `/message`

    return server({ url, params: { chatRoom } })
  },

  createRoom: (chatRoomName, hostName, youTubeUrl) => {
    const url = `/chatroom`

    return server({
      url,
      data: { name: chatRoomName, host: hostName, videoUrl: youTubeUrl },
      method: 'POST',
    })
  },

  createUser: (username) => {
    const url = `/user`

    return server({
      url,
      data: { username },
      method: 'POST',
    })
  },

  joinRoom: (chatRoomId, userId) => {
    socket.emit('join', {
      chatRoomId,
      userId,
    })
  },
}

export default api
