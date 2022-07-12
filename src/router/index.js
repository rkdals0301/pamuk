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
    component: () => import('@/views/recipe/RecipePage')
  }
]

const router = new VueRouter({
  routes
})

export default router