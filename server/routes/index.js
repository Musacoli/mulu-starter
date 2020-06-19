import chatRoomsRouter from './chatRooms'
import usersRouter from './users'
/**
 * @param app {object} the express app instance
 */
const appRouter = (app) => {
  app.use('/chat-room', chatRoomsRouter)
  app.use('/user', usersRouter)
  app.use('/', (req, res) => {
    res.status(200).send('Welcome to the Mulu Intro Project')
  })
}

export default appRouter;
