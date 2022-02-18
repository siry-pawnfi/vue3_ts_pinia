import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import About from '@/pages/about.vue'
// import Home from '@/pages/home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/home.vue'),
    },
    {
        path: '/about',
        component: () => import('@/pages/about.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//路由守卫

router.beforeEach((to, from) => {
  if(true){
    console.log('...')
  } else {
    return false
  }
})

export default router
