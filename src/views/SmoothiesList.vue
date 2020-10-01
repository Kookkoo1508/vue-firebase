<template>
  <div>
    <h2>Smoothies Firebase </h2>
    <SmoothieCard v-for="smoothie in smoothies.smoothies" :key="smoothie.id" :smoothie="smoothie"
      @refreshSmoothie="onRefreshSmoothies"/>
  </div>
</template>

<script>
import SmoothieCard from '@/components/SmoothieCard.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    SmoothieCard
  },
  created() {
    this.$store.dispatch('smoothies/fetchSmoothies')
  },
  computed: {
    ...mapState(['smoothies']),
    ...mapGetters('smoothies', ['refreshSmoothies', 'getDeleteSmoothieId']) // Declare but not used
  },
  methods: {
    onRefreshSmoothies() {
      this.$store.dispatch('smoothies/fetchSmoothies')
      //console.log('DELETE ID:', this.getDeleteSmoothieId)
    }
  }
}
</script>
