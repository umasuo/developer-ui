import 'babel-polyfill'
import Vue from 'vue'

//register menu component
import Menu from '../common/components/Menu.vue'
Vue.component('Menu', Menu)

//register menu component
import Footer from '../common/components/Footer.vue'
Vue.component('Footer', Footer)

// The Main page, use home page as main page.
import Main from './components/homepage/index.vue'

// the store
import store from './store/store'

new Vue({
  el: '#app',//use element 'app' as the root
  store,
  render: h => h(Main)
})
