<!--  -->
<template>
  <v-row>
    <v-col cols="12">
        <!-- title -->
      <v-row justify="space-between" class=" pb-3">
        <span class="title ma-3"> 热议 </span>
        <v-chip pill right class="ma-3" color="anchor" outlined >
          <span class="caption">2021-01-04</span>
          <v-icon right small color="highlight"> mdi-fire </v-icon>
        </v-chip>
      </v-row>
        <!-- timeline -->
      <v-timeline dense align-top>
        <v-timeline-item
          v-for="item in topicData"
          :key="item.rate"
          :color="item.color"
          icon="mdi-pound"
          :small="item.size"
        >
          <v-row>
            <v-col cols="3">
              <strong v-text="item.rate"></strong>
            </v-col>
            <v-col>
              <strong
                class="subtitle-2 font-weight-bold"
                v-text="item.topictitle"
              ></strong>
              <div class="caption" v-text="item.topicsubtitle"></div>
              <v-avatar
                class="mr-1"
                size="20"
                v-for="avatar in item.topicUserList"
                :key="avatar.index"
              >
                <v-img :src="avatar.avatarImg"></v-img>
              </v-avatar>
              <span
                class="caption pl-1 font-weight-light"
                color="grey lighten-1"
                >17人在讨论</span
              >
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    topicData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
</style>