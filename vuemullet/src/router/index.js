import Vue from 'vue'
import VueRouter from 'vue-router'
import doo from '@/components/doo.vue'
import foo from '@/components/foo.vue'
import contact from '@/components/contact.vue'
//import instaFeed from '../views/Instagram'

Vue.use(VueRouter)

const routes = [
 // { path: '/instagram', component: instaFeed },
  { path: '/foo', component: foo },
  { path: '/doo', component: doo },
  { path: '/contact', component: contact }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
