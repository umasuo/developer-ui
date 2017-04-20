import 'babel-polyfill'
import Vue from 'vue'
// import Counter from '../common/Counter.vue'
import CCounter from './components/Counter.vue'
import solution from './components/solution.vue'
import carousel from './components/carousel.vue'

import store from './store/store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './components/router'
// const routes = [
//   { path: '/foo', component: solution },
//   { path: '/bar', component: carousel }
// ]
// const router = new VueRouter({
//   routes
// })

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(CCounter)
})
