import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Safari from './views/safari/Safari.vue'
import Message from './views/message/Message.vue'
import Profile from './views/profile/Profile.vue'


Vue.use(Router)

const routes = [{
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/safari',
    component: Safari
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: () => import('./views/detail/Detail')
  }

]

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})