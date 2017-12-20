import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import OneDayTour from '@/page/oneDayTour/oneDayTour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/oneDayTour',
      name: 'oneDayTour',
      component: OneDayTour
    }
  ]
})
