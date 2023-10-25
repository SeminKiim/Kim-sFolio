import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KimJangTalk from '../views/Kimjangtalk.vue'
import GreenEarth from '../views/GreenEarth.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kimjangtalk-businessmodel',
    component: KimJangTalk
  },
  {
    path: 'green-earth',
    component: GreenEarth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
