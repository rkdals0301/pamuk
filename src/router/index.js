import { createRouter, createWebHashHistory } from 'vue-router'
import PageName from '@/utils/define/PageName'
import RoutePath from '@/utils/define/RoutePath'

const routes = [
  {
    path: RoutePath.Home,
    redirect: RoutePath.Recipe
  },
  {
    path: RoutePath.Recipe,
    name: PageName.Recipe,
    component: () => import('@/views/recipe/Recipe.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
