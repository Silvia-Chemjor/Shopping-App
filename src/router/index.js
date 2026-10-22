import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/Admin.vue'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/views/Login.vue'
import Products from '@/components/Products.vue'
import Profile from '@/components/Profile.vue'
import Signup from '@/views/Signup.vue'
import ViewProduct from '@/components/ViewProduct.vue'
import Orders from '@/components/Orders.vue'
import { components } from 'vuetify/dist/vuetify.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/orders',
      component:  Orders
    },
    {
      name: 'ViewProduct',
      path: '/viewproduct',
      component: ViewProduct,
      props: route => ({id: Number(route.params.id)})
    },
  ],
})

export default router
