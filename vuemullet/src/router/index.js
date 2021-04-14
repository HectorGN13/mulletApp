import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App'
import doo from '@/components/doo.vue'
import foo from '@/components/foo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/foo', component: foo },
  { path: '/doo', component: doo }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
