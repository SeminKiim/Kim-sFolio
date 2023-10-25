import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KimJangTalk from '../views/Kimjangtalk.vue'
import GreenEarth from '../views/GreenEarth.vue'
import BusinessPlan from '../views/BusinessPlan.vue'
import RestInPet from '../views/RestInPet.vue'

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
    path: '/green-earth',
    component: GreenEarth
  },
  {
    path: '/business-plan',
    component: BusinessPlan
  },
  {
    path: '/rest-in-pet',
    component: RestInPet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
