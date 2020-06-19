import chatRoomsRouter from './chatRooms'
/**
 * @param app {object} the express app instance
 */
const appRouter = (app) => {
  app.use('/chat-room', chatRoomsRouter)
  app.use('/', (req, res) => {
    res.status(200).send('Welcome to Mulu Intro Project')
  })
}

export default appRouter;
