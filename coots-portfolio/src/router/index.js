import { createRouter, createWebHistory } from 'vue-router'
import AboutDetailView from '@/views/AboutDetailView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectView from '@/views/ProjectView.vue'

const routes = [
  {
    // Note: the actual content for the about page is contained within App.vue because it contains the main navigation and we want it to be visible on all pages. This decision was mainly made to support transitions and animation. 
    path: '/',
    name: 'about',
    meta: { title: 'Walter Coots' }
  },
  {
    path: '/aboutDetail',
    name: 'aboutDetail',
    component: AboutDetailView,
    meta: { title: 'Walter Coots - About' }
  },
  {
    path: '/work',
    children: [
      {
        name: 'work',
        path: '',
        meta: { title: 'Walter Coots - Work' }
      },
      { 
        name: 'project',
        path: 'project/:slug',
        component: ProjectView,
        meta: { title: 'Walter Coots - Work' }
      },
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView,
    meta: { title: 'Walter Coots - Contact' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Walter Coots';
})

export default router
