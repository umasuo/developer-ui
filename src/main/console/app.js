import 'babel-polyfill'
import Vue from 'vue'
// import Counter from '../common/Counter.vue'
import CCounter from './components/Counter.vue'
import store from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(CCounter)
})
