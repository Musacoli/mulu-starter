import HomeView from '../views/HomeView'
import CreateClassView from '../views/CreateClassView'

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
]

export default routes
