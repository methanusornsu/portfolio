// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import E_PriceSync from '../components/project/E_PriceSync.vue'
import UX_UI from '../components/project/design.vue'
import Senior_project from '../components/project/senior.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/E_PriceSync',
    name: 'E_PriceSync',
    component: E_PriceSync
  },

  {
    path: '/UX/UI',
    name: 'UX/UI',
    component: UX_UI
  },

  {
    path: '/Senior_project',
    name: 'Senior project',
    component: Senior_project
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router