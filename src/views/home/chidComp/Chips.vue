<!--  -->
<template>
  <v-chip-group class="pt-1" v-model="selection" mandatory active-class="primary--text">
      <v-chip v-for="tag in tags" :key="tag" filter 
      filter-icon="mdi-cards-diamond"
      :value="tag"
      >{{tag}}
      </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name:'',
  data () {
    return {
        tags:['同城','关注','推荐'],
        selection:'推荐'
    };
  },

}

</script>
<style scoped>
</style>