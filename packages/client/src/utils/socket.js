import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_MULU_SOCKET_IO_URL)

export default socket
