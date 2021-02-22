<!--  -->
<template>
  <v-row>
    <v-col cols="12">
      <v-card rounded="xl" elevation="0">
        <v-carousel
          cycle
          continuous
          interval="5000"
          :show-arrows="false"
          height="200"
          delimiter-icon="mdi-square-small"
          hide-delimiter-background
        >
          <v-carousel-item
            href=""
            v-for="(item, index) in swiperImage"
            :key="index"
            transition="expand-transition"
          >
              <v-img :src="item.swiperimg" @load="swiperImgLoad"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "topSwiper",
  components: {},
  props: {
    swiperImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods:{
    swiperImgLoad(){
      this.$emit('swiperImgLoad')
    }
  }
};
</script>
<style scoped>
</style>