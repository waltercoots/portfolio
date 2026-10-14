import { createRouter, createWebHistory } from "vue-router"
import workData from "@/assets/work.json"

import ScrollShell from "@/views/ScrollShell.vue"
import AboutModal from "@/modals/AboutModal.vue"
import QuickOverviewModal from "@/modals/QuickOverviewModal.vue"
import CaseStudyModal from "@/modals/CaseStudyModal.vue"
import NotFoundModal from "@/modals/NotFoundModal.vue"
import { hasApplication, loadApplication } from "@/applications"

const ApplicationPage = () => import("@/views/ApplicationPage.vue")

const shellRoute = (path, meta = {}) => ({
  path,
  components: {
    default: ScrollShell,
  },
  meta,
})

const modalRoute = (path, modal, meta = {}, props) => ({
  path,
  components: {
    default: ScrollShell,
    modal,
  },
  meta: { isModal: true, ...meta },
  ...(props ? { props } : {}),
})

const routes = [
  shellRoute("/", { section: "splash", title: "Walter Coots" }),
  shellRoute("/", { section: "home", title: "Walter Coots"  }),
  shellRoute("/work", { section: "home", title: "Walter Coots's Work"  }),
  modalRoute("/about", AboutModal, { title: "About Walter Coots" }, {modal:true}),
  modalRoute("/quick-overview", QuickOverviewModal, { title: "A Quick Overview of Walter Coots" }, {modal:true}),
  modalRoute("/work/:slug", CaseStudyModal, { title: ":slug"}, {modal:true}),
  // Per-company application pages, one JSON file each in src/applications/.
  // Unknown slugs fall through to the not-found page, keeping the URL as typed.
  {
    ...modalRoute("/:slug", ApplicationPage, { noindex: true }),
    beforeEnter: async (to) => {
      if (hasApplication(to.params.slug)) {
        // Load the page's JSON before the modal opens so it never renders empty
        await loadApplication(to.params.slug)
        return
      }
      return {
        name: "not-found",
        params: { pathMatch: to.path.substring(1).split("/") },
        query: to.query,
        hash: to.hash,
      }
    },
  },
  {
    ...modalRoute("/:pathMatch(.*)*", NotFoundModal, { title: "Page not found — Walter Coots", noindex: true }),
    name: "not-found",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to,from,savedPosition) {
    if (to.meta?.isModal) return false
    if (["/", "/home"].includes(to.path)) return false
    if (to.path === from.path) return false
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  if (to.params.slug) {
    const study = workData.projects.find(p => p.slug === to.params.slug)
    document.title = study ? `${study.title} — Walter Coots` : 'Walter Coots'
  } else {
    document.title = to.meta?.title ?? 'Walter Coots'
  }
})

// Application and not-found pages shouldn't show up in search results
router.afterEach((to) => {
  let robots = document.querySelector('meta[name="robots"]')
  if (to.meta?.noindex) {
    if (!robots) {
      robots = document.createElement("meta")
      robots.name = "robots"
      document.head.appendChild(robots)
    }
    robots.content = "noindex, nofollow"
  } else {
    robots?.remove()
  }
})

export default router