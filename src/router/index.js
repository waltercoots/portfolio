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
import MachinifyJob from "@/cover-letters/MachinifyJob.vue"
import LuxuryPresenceJob from "@/cover-letters/LuxuryPresenceJob.vue"
import ModusCreateJob from "@/cover-letters/ModusCreateJob.vue"
import ZillowJob from "@/cover-letters/ZillowJob.vue"
import OllieJob from "@/cover-letters/OllieJob.vue"
import SeekrJob from "@/cover-letters/SeekrJob.vue"
import DuckDuckGoJob from "@/cover-letters/DuckDuckGoJob.vue"
import AppleJob from "@/cover-letters/AppleJob.vue"
import ScotchJob from "@/cover-letters/ScotchJob.vue"
import CodePathJob from "@/cover-letters/CodePathJob.vue"
import MyPatternJob from "@/cover-letters/MyPatternJob.vue"
import ClipboardJob from "@/cover-letters/ClipboardJob.vue"
import MicrosoftJob from "@/cover-letters/MicrosoftJob.vue"
import PartlyJob from "@/cover-letters/PartlyJob.vue"
import ComPsychJob from "@/cover-letters/ComPsychJob.vue"
import AshbyJob from "@/cover-letters/AshbyJob.vue"
import LoanCrateJob from "@/cover-letters/LoanCrateJob.vue"
import DesignSystemsJob from "@/cover-letters/DesignSystemsJob.vue"
import RealtorJob from "@/cover-letters/RealtorJob.vue"
import ArriveLogisticsJob from "@/cover-letters/ArriveLogisticsJob.vue"
import RampJob from "@/cover-letters/RampJob.vue"

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
  modalRoute("/machinify", MachinifyJob, { title: "Walter Coots × Machinify" }, {modal:true}),
  modalRoute("/luxury-presence", LuxuryPresenceJob, { title: "Walter Coots × Luxury Presence" }, {modal:true}),
  modalRoute("/modus-create", ModusCreateJob, { title: "Walter Coots × Modus Create" }, {modal:true}),
  modalRoute("/zillow", ZillowJob, { title: "Walter Coots × Zillow" }, {modal:true}),
  modalRoute("/ollie", OllieJob, { title: "Walter Coots × Ollie" }, {modal:true}),
  modalRoute("/seekr", SeekrJob, { title: "Walter Coots × Seekr" }, {modal:true}),
  modalRoute("/duckduckgo", DuckDuckGoJob, { title: "Walter Coots × DuckDuckGo" }, {modal:true}),
  modalRoute("/apple", AppleJob, { title: "Walter Coots × Apple" }, {modal:true}),
  modalRoute("/scotch", ScotchJob, { title: "Walter Coots × Scotch" }, {modal:true}),
  modalRoute("/codepath", CodePathJob, { title: "Walter Coots × CodePath" }, {modal:true}),
  modalRoute("/mypattern", MyPatternJob, { title: "Walter Coots × MyPattern" }, {modal:true}),
  modalRoute("/clipboard", ClipboardJob, { title: "Walter Coots × Clipboard" }, {modal:true}),
  modalRoute("/microsoft", MicrosoftJob, { title: "Walter Coots × Microsoft" }, {modal:true}),
  modalRoute("/partly", PartlyJob, { title: "Walter Coots × Partly" }, {modal:true}),
  modalRoute("/compsych", ComPsychJob, { title: "Walter Coots × ComPsych" }, {modal:true}),
  modalRoute("/ashby", AshbyJob, { title: "Walter Coots × Ashby" }, {modal:true}),
  modalRoute("/loancrate", LoanCrateJob, { title: "Walter Coots × LoanCrate" }, {modal:true}),
  modalRoute("/design-systems", DesignSystemsJob, { title: "Walter Coots — Design Systems" }, {modal:true}),
  modalRoute("/realtor", RealtorJob, { title: "Walter Coots × Realtor.com" }, {modal:true}),
  modalRoute("/arrive-logistics", ArriveLogisticsJob, { title: "Walter Coots × Arrive Logistics" }, {modal:true}),
  modalRoute("/ramp", RampJob, { title: "Walter Coots × Ramp" }, {modal:true}),
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