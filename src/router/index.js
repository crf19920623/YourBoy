import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Location from '@/page/location/location'
import Foreign from '@/page/location/foreign'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/foreign',
      name: 'foreign',
      component: Foreign
    }
  ]
})
