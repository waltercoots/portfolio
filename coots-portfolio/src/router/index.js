import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import AboutDetailView from '@/views/AboutDetailView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/aboutDetail',
    name: 'aboutDetail',
    component: AboutDetailView
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
