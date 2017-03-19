<template>
  <div id="app">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import firstcomponent from '../../common/components/menu.vue'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  components: { firstcomponent }
}
</script>
