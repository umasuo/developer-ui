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
import Carousel from './Carousel.vue'
import Feature from './Feature.vue'
import Solution from './Solution.vue'
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
