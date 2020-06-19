import chatRoomsRouter from './chatRooms'
import usersRouter from './users'
import messagesRouter from './messages'
/**
 * @param app {object} the express app instance
 */
const appRouter = (app) => {
  app.use('/chatroom', chatRoomsRouter)
  app.use('/user', usersRouter)
  app.use('/message', messagesRouter)
  app.use('/', (req, res) => {
    res.status(200).send('Welcome to the Mulu Intro Project')
  })
}

export default appRouter;
