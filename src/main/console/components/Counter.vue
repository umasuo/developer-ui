<template>
  <div id="app">
    Console: Clicked: {{ $store.state.count }} 

    {{$store.state.developer.email}}
    
    <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="foo">Go to Foo</router-link>
    <router-link to="bar">Go to Bar</router-link>
    <router-link to="developer">Go to developer</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment'
  ])
}
</script>
