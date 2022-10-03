import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import ArtworkView from '../views/ArtworkView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/artist/:name',
    name: 'artist',
    component: ArtistView
  },
  {
    path: '/artwork/:name',
    name: 'artwork',
    component: ArtworkView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
