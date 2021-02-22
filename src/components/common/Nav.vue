<!--  -->
<template>

    <v-app-bar class="home-nav" flat color="white" >
      <slot name="left"></slot>
      <v-spacer></v-spacer>
      <slot name="right"></slot>
    </v-app-bar>

</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style scoped>
.home-nav{
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>