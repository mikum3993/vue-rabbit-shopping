import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', //默认子路由
          component: import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          component: import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          component: import('@/views/SubCategory/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  // 路由行为的配置项
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
