import VueRouter from 'vue-router'
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
    component: () => import('@/views/recipe/Recipe')
  }
]

const router = new VueRouter({
  routes
})

export default router