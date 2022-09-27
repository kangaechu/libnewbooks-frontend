import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ()=> import('./components/Books.vue')
  },
  {
    path: '/:targetDate',
    name: 'books',
    props: true,
    component: ()=> import('./components/Books.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
