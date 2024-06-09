import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import CityPicker from '@/views/citypicker/CityPicker'
import Movies from '@/views/home/movies/Movies'
import InTheaters from '@/views/home/movies/InTheaters'
import ComingSoon from '@/views/home/movies/ComingSoon'
import Theaters from '@/views/home/theaters/Theaters'
import Profile from '@/views/home/profile/Profile'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/movies',
    children: [
      {
        path: 'movies',
        name: 'movies',
        component: Movies,
        redirect: '/home/movies/intheaters',
        children: [
          {
            path: 'intheaters',
            name: 'intheaters',
            component: InTheaters,
            meta: {
              index: 1
            },
          },
          {
            path: 'comingsoon',
            name: 'comingsoon',
            component: ComingSoon
          }
        ]
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: Theaters
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },
  {
    path: '/citypicker',
    name: 'citypicker',
    component: CityPicker,
    meta: {
      index: 2
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router