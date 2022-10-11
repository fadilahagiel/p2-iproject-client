import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/Register.vue'
import CreateTeam from '../views/CreateTeam.vue'
import HomePage from '../views/Home.vue'
import TeamProfile from '../views/TeamProfile.vue'
import EditTeam from '../views/EditTeam.vue'
import ListPlayers from '../views/PlayersPage.vue'
import PlayerDetail from '../views/PlayerDetail.vue'
import Formation from '../views/Formation.vue'
import Store from '../views/BuyPlayer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'registerPage',
      component: RegisterPage
    },
    {
      path: '/createTeam',
      name: 'createTeam',
      component: CreateTeam
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'profile',
      component: TeamProfile
    },
    {
      path: '/formation',
      name: 'formation',
      component: Formation
    },
    {
      path: '/editTeam',
      name: 'editTeam',
      component: EditTeam
    },
    {
      path: '/myPlayers',
      name: 'myPlayers',
      component: ListPlayers
    },
    {
      path: '/playerDetail/:id',
      name: 'playerDetail',
      component: PlayerDetail
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    }
  ]
})

export default router