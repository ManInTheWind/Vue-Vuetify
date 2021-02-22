<!--  -->
<template>
  <v-row class="pb-16">
    <v-col  class="py-0">
      <v-list three-line class="py-0">
        <template>
          <v-subheader class="px-0"> 消息 </v-subheader>
          <v-list-item class="px-0"
          v-for="(item,index) in messageItem" :key="index">
            <v-list-item-avatar>
              <v-img :src="item.messageAvatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2 font-weight-bold" v-html="item.userName"></v-list-item-title>
              <v-list-item-subtitle  class="pt-2 body-2">
                <span class="text--primary"></span> {{item.messageContent}}
              </v-list-item-subtitle>
              <v-divider class="mt-3"></v-divider>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props:{
      messageItem:{
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