<!--  -->
<template>
  <v-row class="pb-16">
    <v-col cols="12" >
      <!-- title -->
      <v-row justify="space-between" class="pb-3">
        <span class="title ma-3"> 广场 </span>
      </v-row>
      <!-- commentSquare -->
      <v-card elevation="0" v-for="(item,index) in topicListData" :key="index" class="mb-8">
        <v-row>
          <v-col cols="2" class="ml-3">
            <v-avatar size="40">
              <v-img :src="item.user.useravatarImg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-card-text class="body-2 font-weight-Normal pa-2 pb-5">
              {{item.usercomment}}
            </v-card-text>
          </v-col>
        </v-row>
        <v-card-actions class="pa-0">
          <v-list-item class="grow px-1" dense>
            <v-sheet
              class="d-inline-block text-truncate grey lighten-3 rounded-lg px-2"
              style="max-width: 150px"
            >
              <v-icon class="pr-1" small color="primary"> mdi-pound </v-icon>
              <span class="caption">{{item.tagsdata}}</span>
            </v-sheet>

            <v-row align="center" justify="end" class="pr-1">
              <v-badge :content="item.like.likeCount" color="grey lighten-1" bordered overlap class="mr-5">
                <v-btn icon @click="isLikeChange(index)">
                  <v-icon v-if="item.like.isLike" color="secondary" small>mdi-thumb-up</v-icon>
                  <v-icon v-else small>mdi-thumb-up-outline</v-icon>


                </v-btn>
              </v-badge>


              <v-badge :content="item.commentData.commentCount" color="grey lighten-1" bordered overlap class="mr-5">
                <v-btn icon>
                  <v-icon small>mdi-comment-processing-outline</v-icon>
                </v-btn>
              </v-badge>
            </v-row>
          </v-list-item>
        </v-card-actions>
        <v-divider class="mt-3" style="opacity: 0.65;"></v-divider>
      </v-card>
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
    topicListData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    isLikeChange(index){
      this.$emit('isLikeChange',index)
    }
  }
};
</script>
<style scoped>
</style>