import { createRouter, createWebHistory } from "vue-router"
import workData from "@/assets/work.json"

import ScrollShell from "@/views/ScrollShell.vue"
import AboutModal from "@/modals/AboutModal.vue"
import QuickOverviewModal from "@/modals/QuickOverviewModal.vue"
import CaseStudyModal from "@/modals/CaseStudyModal.vue"
import TremendousJob from "@/cover-letters/TremendousJob.vue"
import NgrokJob from "@/cover-letters/NgrokJob.vue"
import ValonJob from "@/cover-letters/ValonJob.vue"
import BetterUpJob from "@/cover-letters/BetterUpJob.vue"
import FunctionHealthJob from "@/cover-letters/FunctionHealthJob.vue"
import HomeboundJob from "@/cover-letters/HomeboundJob.vue"
import NetspendJob from "@/cover-letters/NetspendJob.vue"
import LightJob from "@/cover-letters/LightJob.vue"

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
  modalRoute("/tremendous", TremendousJob, { title: "Walter Coots × Tremendous" }, {modal:true}),
  modalRoute("/ngrok", NgrokJob, { title: "Walter Coots × ngrok" }, {modal:true}),
  modalRoute("/valon", ValonJob, { title: "Walter Coots × Valon" }, {modal:true}),
  modalRoute("/betterup", BetterUpJob, { title: "Walter Coots × BetterUp" }, {modal:true}),
  modalRoute("/function-health", FunctionHealthJob, { title: "Walter Coots × Function Health" }, {modal:true}),
  modalRoute("/homebound", HomeboundJob, { title: "Walter Coots × Homebound" }, {modal:true}),
  modalRoute("/netspend", NetspendJob, { title: "Walter Coots × Netspend" }, {modal:true}),
  modalRoute("/light", LightJob, { title: "Walter Coots × Light" }, {modal:true}),
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


export default router