import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Movies from '../views/Movies.vue'
import MoviesEnt from '../views/MoviesEnt.vue'

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    component: Movies,
    redirect: '/movie/ent',
    children: [
      {
        path: 'ent',
        component: MoviesEnt,
        meta: {
          r: 'ent'
        }
      },
      {
        path: 'com',
        component: () => import('../views/MoviesCom.vue'),
        children: [
          {
            path: 'benshan',
            component: () => import('../views/Benshan.vue')
          },
          {
            path: 'dandan',
            component: () => import('../views/Dandan.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/theater/:type',
    name: 'theater',
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    },
    props: (route) => {
      return {
        type: route.params.type,
        abc: 'def'
      }
    },
    component: () => import('../views/Theaters.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/others', 
    alias: '/o',
    components: {
      default: () => import('../views/Other1.vue'),
      v2: () => import('../views/Other2.vue')
    }
  },
  {
    path: '/abc-*',
    name: 'page404',
    component: () => import('../views/Page404.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // if (to.meta.r === 'ent') {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
  if (from.meta.r === 'ent') {
    // if(confirm('你真的要离开吗？')) {
    // }
  }
})

export default router