<template>
  <v-container fluid class="px-1">
    <!-- Nav -->
    <Nav >
      <!-- v2.0 -->
      <template v-slot:left>
        <v-img
          min-width="24"
          max-width="96"
          height="30"
          src="@/assets/img/gemLogo.png"
        ></v-img>
      </template>
      <template v-slot:right>
        <v-btn icon :ripple=false><v-icon>mdi-magnify</v-icon> </v-btn>
      </template>
    </Nav>

    <Scroll ref="scroll">
      <template v-slot:card-contain>
        <!-- Chips -->
        <chips />

        <!-- Contain wrap -->
        <card-item
          :cardData="cardData"
          v-on:favChangeRightList="favChangeRightList"
          v-on:favChangeLeftList="favChangeLeftList"
          :imgLoad="imgLoad"
        ></card-item>
      </template>
    </Scroll>
  </v-container>
</template>

<script>
import Nav from "@/components/common/Nav";
import Scroll from "@/components/common/Scroll";
import CardItem from "./chidComp/CardItem";
import Chips from "./chidComp/Chips";

export default {
  name: "Home",
  data() {
    return {
      cardData: {
        leftData: [
          {
            title: "hello zhuzhu",
            avatarSrc: require("@/assets/img/avatar/2.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: true,
              favCount: 21,
            },
          },
          {
            title: "Pre-fab homes",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: false,
              favCount: 116,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/1.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: false,
              favCount: 256,
            },
          },
          {
            title: "Best airlines",
            avatarSrc: require("@/assets/img/avatar/3.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: true,
              favCount: 772,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (0).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (1).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (2).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (3).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
        ],
        rightData: [
          {
            title: "nice text",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: false,
              favCount: 89,
            },
          },
          {
            title: "hope you adasd well",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: false,
              favCount: 2,
            },
          },
          {
            title: "dsasdf you doing well",
            avatarSrc: require("@/assets/img/avatar/3.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: true,
              favCount: 24,
            },
          },
          {
            title: "hope 2323g doing well",
            avatarSrc: require("@/assets/img/avatar/2.jpg"),
            imgSrc: require("@/assets/img/poly.jpg"),
            favStatus: {
              isFav: false,
              favCount: 46,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (4).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (5).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (6).jpg"),
            favStatus: {
              isFav: false,
              favCount: 17,
            },
          },
          {
            title: "Favorite road trips",
            avatarSrc: require("@/assets/img/avatar/john.jpg"),
            imgSrc: require("@/assets/img/gridImg/docks (7).jpg"),
            favStatus: {
              isFav: false,
              favCount: 21,
            },
          },
        ],
      },
    };
  },
  components: { Nav, CardItem, Chips, Scroll },
  methods: {
    favChangeRightList(index) {
      console.log(index);
      const that = this;
      const targetRight = that.cardData.rightData[index].favStatus;
      if (targetRight.isFav) {
        targetRight.isFav = false;
        targetRight.favCount--;
      } else {
        targetRight.isFav = true;
        targetRight.favCount++;
      }
    },
    favChangeLeftList(index) {
      console.log(index);
      const that = this;
      const targetLeft = that.cardData.leftData[index].favStatus;
      if (targetLeft.isFav) {
        targetLeft.isFav = false;
        targetLeft.favCount--;
      } else {
        targetLeft.isFav = true;
        targetLeft.favCount++;
      }
    },
    imgLoad() {
      this.$refs.scroll.bs.refresh();
    },
  },
  created() {},
  mounted() {
    this.$refs.scroll.bs.refresh();

    console.log(this.$vuetify);
  },
  activated: function () {
    this.$refs.scroll.bs.refresh();
  },
};
</script>

<style scoped>
/* .home-nav {
  position: fixed;
  top: 0;
  z-index: 999;
} */
/* .content {
  height: calc(100vh - 56px);
} */
</style>