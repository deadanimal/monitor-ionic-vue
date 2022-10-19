import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NewItem from '@/views/NewItem.vue';
import TestApi from '@/views/TestApi.vue';
import LamanUtama from "@/views/LamanUtama.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem,
  },
  {
    path: '/testapi',
    name: 'TestApi',
    component: TestApi,
  },
  {
    path: '/lamanutama',
    name: 'LamanUtama',
    component: LamanUtama,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
