import { createRouter, createWebHistory } from 'vue-router'
import AboutDetailView from '@/views/AboutDetailView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectView from '@/views/ProjectView.vue'
import EmptyScreen from '@/components/EmptyScreen.vue'

const routes = [
  {
    // Note: the actual content for the about page is contained within App.vue because it contains the main navigation and we want it to be visible on all pages. This decision was mainly made to support transitions and animation. 
    path: '/',
    name: 'about',
    component: EmptyScreen
  },
  {
    path: '/aboutDetail',
    name: 'aboutDetail',
    component: AboutDetailView
  },
  {
    path: '/work',
    children: [
      {
        name: 'work',
        path: '',
        component: WorkView
      },
      { 
        name: 'project',
        path: 'project/:slug',
        component: ProjectView
      },
    ]
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
