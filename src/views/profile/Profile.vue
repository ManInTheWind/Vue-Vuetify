<!--  -->
<template>
  <v-container class="pa-0">
    <div class="scroll-wrapper" ref="profilescroll">
      <div class="scroll-content">
        <!-- TopImage -->
        <v-row>
          <v-col cols="12" class="pa-0">
            <v-btn dark class="setting-icon" icon>
              <v-icon>mdi-cog</v-icon></v-btn
            >
            <v-card>
              <v-img class="profile-top-img" src="@/assets/img/bg.jpg"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <!-- Profile -->
        <v-row class="topImg">
          <v-card class="card rounded-t-xl" flat>
            <v-list-item-avatar
              rounded="circle"
              class="avatarfloat"
              :size="avatarsize"
            >
              <v-img src="@/assets/img/avatar/john.jpg"></v-img>
            </v-list-item-avatar>

            <v-card
              class="d-flex align-center justify-center flex-column mt-15"
              flat
            >
              <span class="title"> 朱匆陇@Monster </span>
              <span class="subtitle-2">
                <v-icon small color="primary">mdi-cards-diamond</v-icon>
                decoyNum:17568
              </span>
            </v-card>
          </v-card>
        </v-row>
        <FollowWrap :Status="Status" class="mt-16"></FollowWrap>
        <!-- Grid -->
        <ProfileGrid class="grid-wrap" :profileImg="profileImg" />
      </div>
    </div>
  </v-container>
</template>

<script>
import BScroll from "better-scroll";
import FollowWrap from "./childComp/FollowWrap";
import ProfileGrid from "./childComp/ProfileGrid";

export default {
  name: "Profile",
  data() {
    return {
      height: 0,
      Status: [
        { followNum: 1, type: "动态" },
        { followNum: 17, type: "关注" },
        { followNum: 28, type: "粉丝" },
        { followNum: 0, type: "话题" },
      ],
      profileImg: [
        { gridImg: require("@/assets/img/gridImg/docks (0).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (1).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (2).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (3).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (4).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (5).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (6).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (7).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (8).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (9).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (10).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (11).jpg") },
        { gridImg: require("@/assets/img/gridImg/docks (12).jpg") },
      ],
    };
  },
  components: {
    FollowWrap,
    ProfileGrid,
  },
  computed: {
    avatarsize() {
      const height = this.$vuetify.breakpoint.height;
      if (height >= 500 && height <= 600) {
        return 66;
      } else if (height > 600 && height <= 700) {
        return 80;
      } else if (height > 700 && height <= 900) {
        return 90;
      } else {
        return 100;
      }
    },
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.profilescroll, {
        probeType: 3,
        observeDOM: true,
      });
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
};
</script>
<style scoped>
.topImg {
  position: relative;
}
.card {
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  z-index: 100;
}
.profile-top-img {
  height: 45vh;
}
.avatarfloat {
  position: absolute;
  left: 50%;
  top: 0%;
  z-index: 2;
  transform: translate(-50%, -50%);
}
/* .grid-wrap {
  margin-top: 12vh;
} */
.setting-icon {
  position: absolute;
  top: 1.5%;
  right: 3%;
  z-index: 2;
}
.scroll-wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>