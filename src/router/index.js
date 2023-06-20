import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import Entrada from '@/views/Entrada.vue'
import Pausa from "@/views/Pausa.vue"
import Volta from "@/views/Volta.vue"
import Saida from "@/views/Saida.vue"
import Ajuda from "@/views/Ajuda.vue"
import Historico from "@/views/Historico.vue"
import AjudaLogin from '@/views/AjudaLogin.vue'
import Funcionarios from '@/views/Funcionarios.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/entrada',
    name: 'entrada',
    component: Entrada
  },
  {
    path: '/pausa',
    name: 'pausa',
    component: Pausa
  },
  {
    path: '/volta',
    name: 'volta',
    component: Volta
  },
  {
    path: '/saida',
    name: 'saida',
    component: Saida
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: Ajuda
  },
  {
    path: '/historico',
    name: 'historico',
    component: Historico
  },
  {
    path: '/ajudalogin',
    name: 'ajudalogin',
    component: AjudaLogin
  },
  {
    path: '/funcionarios',
    name: 'funcionarios',
    component: Funcionarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
