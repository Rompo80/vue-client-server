import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import NewBookView from '@/views/NewBookView.vue'
import EditBookView from '@/views/EditBookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: NewBookView
  },
  {
    path: '/edit-book/:id',
    name: 'edit-book',
    component: EditBookView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
