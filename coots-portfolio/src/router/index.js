import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'

const routes = [
  {
    // Note: the actual content for the about page is contained within App.vue because it contains the main navigation and we want it to be visible on all pages. This decision was mainly made to support transitions and animation. 
    path: '/',
    name: 'home',
    meta: { title: 'Walter Coots' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Walter Coots';
})

export default router
