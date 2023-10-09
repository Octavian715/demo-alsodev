import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'

const TaskComponent = () => import('@/components/TaskComponent.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/restaurant/:id',
      component: MenuView
    },
    {
      path: '/task2',
      component: TaskComponent
    },
    {
      path: '/:catchAll(.*)', 
      redirect: '/',
    }
  ]
})

export default router
