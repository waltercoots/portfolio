import { createApp } from 'vue'
import '@/assets/styles/_reset.scss' // Note: importing the reset after App was causing font declarations to be overridden, so keep it here
import '@/assets/styles/_fonts.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
