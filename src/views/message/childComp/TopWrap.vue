<!--  -->
<template>
  <v-row class="mx-1">
    <v-col class="mt-5" cols="3" v-for="status in badgeStatus" :key="status.index">
      <v-card class="d-flex justify-space-around" flat>
        <v-badge
        
        :content="status.content" :icon="status.contentIcon"
         color="red" overlap bordered offset-x="15" offset-y="15">
          <v-btn  fab :color="status.btnColor" dark depressed>
            <v-icon dark>{{status.iconType}}</v-icon>
          </v-btn>
        </v-badge>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        badgeStatus:[
            {
                iconType:'mdi-pound',
                btnColor:'primary',
                content:'',
                contentIcon:''
            },
            {
                iconType:'mdi-thumb-up',
                btnColor:'pink',
                content:'99+',
                contentIcon:''
            },
            {
                iconType:'mdi-heart',
                btnColor:'orange',
                content:'17',
                contentIcon:''
            },
            {
                iconType:'mdi-comment-processing',
                btnColor:'secondary',
                content:'',
                contentIcon:'mdi-hand-right'
            }
        ]
    };
  },
};
</script>
<style scoped>
</style>