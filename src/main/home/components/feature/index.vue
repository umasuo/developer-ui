<template>
  <div id="count">
    <Menu></Menu>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'

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
