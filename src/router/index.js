import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Index'
import Signin from '@/views/signin/Index'
import Signup from '@/views/signup/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
