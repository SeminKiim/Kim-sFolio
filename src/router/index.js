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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 스크롤 위치 복원 비활성화
    } else {
      return { x: 0, y: 0 }; // 페이지 이동 시 맨 위로 스크롤
    }
  },
})

export default router
