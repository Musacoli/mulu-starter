import chatRoomsRouter from './chatRooms'
import usersRouter from './users'
import messagesRouter from './messages'
/**
 * @param app {object} the express app instance
 */
const appRouter = (app) => {
  app.use('/v1/chatroom', chatRoomsRouter)
  app.use('/v1/user', usersRouter)
  app.use('/v1/message', messagesRouter)
  app.use('/v1/', (req, res) => {
    res.status(200).send('Welcome to the Mulu Intro Project')
  })
}

export default appRouter
