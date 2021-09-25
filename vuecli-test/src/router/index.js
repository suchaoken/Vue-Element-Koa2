import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../components/register'
import UserList from '../components/userlist'

const routes = [
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path:'/userlist',
    name:'UserList',
    component:UserList

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
