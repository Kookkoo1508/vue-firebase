<template>
    <div class="event-card -shadow">
      <i class="material-icons icons" style="font-size:36px;color:red" @click="deleteSmoothie(smoothie.id)">delete</i>
      <span class="eyebrow">@{{ smoothie.title }} on {{ smoothie.slug }}</span>
      <ul>
        <li v-for="ingredient in smoothie.ingredients" :key="ingredient" v-text="ingredient"></li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    smoothie: Object
  },
  methods: {
    deleteSmoothie(id) {
      this.$store.dispatch('smoothies/deleteSmoothieById', id).then(() => {
        this.$emit('refreshSmoothie')
      })
    }
  }
}
</script>

<style scoped>
.icons {
  position: relative;
  top: 0;
  left: 400px;
}
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
