<template>
  <div id="count">
    <Menu></Menu>
    <Carousel></Carousel>
    <div class="container marketing">
      <Feature></Feature>
      <Solution></Solution>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Carousel from './carousel.vue'
import Feature from './feature.vue'
import Solution from './solution.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment'
  ]),
  components: { Carousel, Feature, Solution }
}
</script>
