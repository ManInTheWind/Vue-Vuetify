<!--  -->
<template>
  <div class="scroll-wrapper mt-12" ref="scroll">
    <div class="scroll-content">
      <slot name="card-contain"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
    };
  },

  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 3,
        
        observeDOM:true
      });
      this.bs.on("scrollStart", () => {
        //console.log("scrollStart-");
      });
      this.bs.on("scroll", ({ y }) => {
        //console.log("scrolling-");
      });
      this.bs.on("scrollEnd", (pos) => {
        //console.log(pos);
      });
    },
  },
};
</script>
<style scoped>
.scroll-wrapper{
  height: calc(100vh - 56px);
  z-index: 50;
  overflow: hidden;
}
</style>