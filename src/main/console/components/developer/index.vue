<template>
  <div id="developer">
    <h1>This is developer module</h1>
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginModel">登录</button>
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerModel">注册</button>
    <!-- 路由出口 -->
    <!-- 用来显示开发者的信息 -->
    <router-view></router-view>
    <login></login>
    <register></register>
  </div>
</template>

<script>
import login from './view/login.vue'
import register from './view/register.vue'
import Vue from 'vue'
Vue.component("login",login)
Vue.component("register",register)
import { mapGetters, mapActions } from 'vuex'
import * as types from './util/types'

export default {
  modules:[
    login,
    register
  ]
}
</script>
