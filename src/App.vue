<template>
  <v-app style="background: ">
    <!-- <SystemBar /> -->
    <v-main class="pt-0" >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <tab-bar />
  </v-app>
</template>

<script>
import TabBar from "./components/common/TabBar";
import SystemBar from "./components/common/SyestemBar";
export default {
  name: "App",
  components: {
    TabBar,
    SystemBar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>
