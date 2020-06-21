import HomeView from 'views/HomeView'
import CreateClassView from 'views/CreateClassView'
import JoinClassView from 'views/JoinClassView'
import ChatRoomView from 'views/ChatRoomView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    exact: true,
    key: 'home',
  },
  {
    path: '/create-class',
    name: 'Create A Class',
    component: CreateClassView,
    exact: true,
    key: 'createClass',
  },
  {
    path: '/join-class/:id',
    name: 'Join A Class',
    component: JoinClassView,
    exact: true,
    key: 'joinClass',
  },
  {
    path: '/chatroom/:id',
    name: 'Chat Room',
    component: ChatRoomView,
    exact: true,
    key: 'chatRoom',
  },
]

export default routes
