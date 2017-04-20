//this is the root router of console

import VueRouter from 'vue-router'
import solution from './solution.vue'
import carousel from './carousel.vue'
import developer from './developer/index.vue'
import developerRouter from './developer/util/developerRouter'

export default new VueRouter({
  routes: [
    { path: '/foo', component: solution },
    { path: '/bar', component: carousel },
    {
      path: '/developer', component: developer,
      children: developerRouter
    }
  ]
})
