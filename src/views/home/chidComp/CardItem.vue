<!--  -->
<template>
  <v-row justify="space-around" class="mx-0 pb-16">
    <v-col cols="6" class="pa-0 pt-2 pr-1">
      <v-col
        v-for="(card, index) in cardsListLeft"
        :key="index"
        class="pa-0 pt-2 pb-2"
      >
        <v-lazy transition="fade-transition">
          <v-card flat>
            <v-card rounded="xl" elevation="0" @click="cardClick" :ripple="false">
              <v-img :height="card.height" :src="card.imgSrc"></v-img>
            </v-card>

            <v-card-subtitle
              v-text="card.title"
              class="px-2 py-1"
            ></v-card-subtitle>

            <v-card-actions class="py-0 px-3">
              <v-row class="grow" no-gutters>
                <v-col cols="6">
                  <v-avatar color="grey darken-3" size="30">
                    <img :src="card.avatarSrc" alt="" @load="imgLoad" />
                  </v-avatar>
                </v-col>

                <v-col cols="6" align-self="center">
                  <v-row align="center" justify="end">
                    <span v-text="card.favStatus.favCount"></span>
                    <v-btn fab text x-small @click="favChangeLeftList(index)">
                      <v-icon v-if="card.favStatus.isFav" color="pink accent-3"
                        >mdi-heart</v-icon
                      >
                      <v-icon v-else color="grey lighten-1">mdi-heart</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-lazy>
      </v-col>
    </v-col>

    <v-col cols="6" class="pa-0 pt-2">
      <v-col
        v-for="(card, index) in cardsListRight"
        :key="index"
        class="pa-0 pt-2 pb-2"
      >
        <v-lazy transition="fade-transition">
          <v-card flat>
            <v-card rounded="xl" elevation="0">
              <v-img :height="card.height" :src="card.imgSrc"></v-img>
            </v-card>

            <v-card-subtitle
              v-text="card.title"
              class="px-2 py-1"
            ></v-card-subtitle>

            <v-card-actions class="py-0 px-3">
              <v-row class="grow" no-gutters>
                <v-col cols="6">
                  <v-avatar color="grey darken-3" size="30">
                    <img :src="card.avatarSrc" alt="" @load="imgLoad" />
                  </v-avatar>
                </v-col>

                <v-col cols="6" align-self="center">
                  <v-row align="center" justify="end">
                    <span v-text="card.favStatus.favCount"></span>
                    <v-btn fab text x-small @click="favChangeRightList(index)">
                      <v-icon v-if="card.favStatus.isFav" color="pink accent-3"
                        >mdi-heart</v-icon
                      >
                      <v-icon v-else color="grey lighten-1">mdi-heart</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-lazy>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    cardData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      cardHeight: [200, 200, 240, 320],
      height: 200,
      cardsListLeft: [],
      cardsListRight: [],
    };
  },

  computed: {},
  methods: {
    getRandomHeight() {
      return this.cardHeight[
        Math.floor(Math.random() * this.cardHeight.length)
      ];
    },
    favChangeRightList(index) {
      this.$emit("favChangeRightList", index);
    },
    favChangeLeftList(index) {
      this.$emit("favChangeLeftList", index);
    },
    cardClick(){
      console.log('cardClick');
      this.$router.push('/detail')
    },
    imgLoad(){
      console.log("imgLoad");
      this.$emit('imgLoad')
    }
  },
  created() {
    this.cardData.leftData.map((item) => {
      item.height = this.getRandomHeight();
    });
    this.cardsListLeft = this.cardData.leftData;

    this.cardsListRight = this.cardData.rightData.map((item) => {
      item.height = this.getRandomHeight();
    });
    this.cardsListRight = this.cardData.rightData;
  },
};
</script>
<style scoped>
</style>