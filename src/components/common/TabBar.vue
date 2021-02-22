<!--  -->
<template>
  <div class="tab-bar-wrap">
    <div class="bg rounded-pill"></div>
    <v-toolbar flat width="325" class="tab-bar">
      <v-row class="justify-space-around tarbar-bg">
        <v-btn
          icon
          text
          v-for="(item, index) in tabData"
          :key="index"
          :value="item.value"
          :to="item.routePath"
          @click="tabClick(index)"
          :ripple=false
        >
          <v-icon
            :color="item.isSelect ? 'secondary' : 'anchor'"
            large
            v-text="item.tabIcon"
          ></v-icon>
        </v-btn>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",

  data() {
    return {
      value: "home",
      tabData: [
        {
          isSelect: false,
          tabIcon: "mdi-home-variant",
          value: "home",
          routePath: "/home",
        },
        {
          isSelect: false,
          tabIcon: "mdi-rhombus-split",
          value: "safari",
          routePath: "/safari",
        },
        {
          isSelect: false,
          tabIcon: "mdi-guitar-pick",
          value: "message",
          routePath: "/message",
        },
        {
          isSelect: false,
          tabIcon: "mdi-account",
          value: "profile",
          routePath: "/profile",
        },
      ],
      isActive: true,
    };
  },
  components: {},
  methods: {
    tabClick(index) {
      //console.log(index);

      for (let i = 0; i < this.tabData.length; i++) {
        for (let i = 0; i < this.tabData.length; i++) {
          this.tabData[i].isSelect = false;
        }
        this.tabData[index].isSelect = true;
      }

    },
  },
  created(){
    //console.log(this.$route);
    // for(let i=0;i < this.tabData.length; i++){
    //   if(this.tabData[i].routePath=this.$route.path){
    //     this.tabClick(i)
    //   }
    // }
    if(this.$route.path=="/home"){
      this.tabData[0].isSelect=true
    }
  }
};
</script>
<style scoped>
.tab-bar-wrap{
  z-index: 990;
}
.tab-bar {
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0) !important;
  z-index: 999;
}

.bg {
  position: fixed;
  bottom: 3%;
  left: 50%;
  width: 325px;
  height: 56px;
  background-color: rgba(241, 243, 244, 0.75) !important;
  transform: translateX(-50%);
  backdrop-filter: blur(10px);
  z-index: 992;

}
</style>