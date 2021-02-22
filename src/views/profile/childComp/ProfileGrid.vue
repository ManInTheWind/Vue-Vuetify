<!--  -->
<template>
  <v-row tag="div" class="mx-1 pb-16">
    <v-col class="pa-1" cols="4" v-for="(item, index) in profileImg" :key="index">
      <v-card class="rounded-lg" flat><v-img height="120" :src="item.gridImg"></v-img></v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProfileGrid",
  data() {
    return {};
  },
  props: {
    profileImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    btnClick() {
      console.log(this.$vuetify);
    },
  },
};
</script>
<style scoped>
</style>