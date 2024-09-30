import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import './index.css'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
