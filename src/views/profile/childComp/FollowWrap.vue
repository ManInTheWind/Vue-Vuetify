<!--  -->
<template>
  <v-row class="mx-1">
    <v-col cols="3" v-for="item in Status" :key="item.type" class="pa-0" >
      <v-card class="d-flex flex-column align-center" flat >
        <v-card-title v-text="item.followNum"> </v-card-title>
        <v-card-subtitle v-text="item.type">  </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FollowWrap",
  data() {
    return {

    };
  },
  props:{
      Status:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
<style scoped>
</style>