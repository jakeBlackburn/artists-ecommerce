import { createRouter, createWebHashHistory } from 'vue-router'
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
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/failure',
    name: 'failure',
    component: FailureView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
