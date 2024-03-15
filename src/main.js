import '@/assets/scss/index.scss' // Importa il file SCSS qui
import './assets/main.css' // Importa il file CSS qui

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Pinia -------------------------------
// Router ------------------------------
app.use(createPinia())
app.use(router)


// AOS
import 'aos/dist/aos.css'
import AOS from 'aos'
app.AOS = new AOS.init()

// Naive -------------------------------
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

// Mount -------------------------------
app.use(AOS).mount('#app')
