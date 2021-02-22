<!--  -->
<template>
  <v-container>
    <!-- Nav -->
    <Nav>
      <!-- v2.0 -->
      <template v-slot:left>
        <span class="headline">广场</span>
      </template>
      <template v-slot:right>
        <v-btn icon>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </template>
    </Nav>

    <Scroll ref="scroll">
      <template v-slot:card-contain>
        <!-- swiper -->
        <top-swiper
          :swiperImage="swiperImage"
          :swiperImgLoad="swiperImgLoad"
          class="mt-12"
        />

        <!-- Contain -->
        <topic-time-line :topicData="topicData"></topic-time-line>
        <topic-list
          :topicListData="topicListData"
          v-on:isLikeChange="isLikeChange"
        ></topic-list>
      </template>
    </Scroll>
  </v-container>
</template>

<script>
import Nav from "@/components/common/Nav";
import Scroll from "@/components/common/Scroll";
import topSwiper from "@/components/common/topSwiper";
import TopicTimeLine from "./childComp/TopicTimeLine";
import TopicList from "./childComp/TopicList";

export default {
  name: "Safari",
  data() {
    return {
      swiperImage: [
        { swiperimg: require("@/assets/img/swiper/1-1.png") },
        { swiperimg: require("@/assets/img/swiper/2-1.png") },
        { swiperimg: require("@/assets/img/swiper/3-1.png") },
      ],
      topicData: [
        {
          rate: "Top 1",
          topictitle: "今天天气不错",
          topicsubtitle: '最高27℃！深圳将一秒"入夏"',
          topicUserList: [
            { avatarImg: require("@/assets/img/avatar/1.jpg") },
            { avatarImg: require("@/assets/img/avatar/2.jpg") },
            { avatarImg: require("@/assets/img/avatar/3.jpg") },
          ],
          color: "primary",
          size: false,
        },
        {
          rate: "Top 2",
          topictitle: "旺达幻视上映",
          topicsubtitle: "崩溃的旺达如何找回自己",
          topicUserList: [
            { avatarImg: require("@/assets/img/avatar/1.jpg") },
            { avatarImg: require("@/assets/img/avatar/2.jpg") },
            { avatarImg: require("@/assets/img/avatar/3.jpg") },
          ],
          color: "highlight",
          size: true,
        },
        {
          rate: "Top 3",
          topictitle: "打工人打工魂",
          topicsubtitle: '2021打工人不再打工"',
          topicUserList: [
            { avatarImg: require("@/assets/img/avatar/1.jpg") },
            { avatarImg: require("@/assets/img/avatar/2.jpg") },
            { avatarImg: require("@/assets/img/avatar/3.jpg") },
          ],
          color: "secondary",
          size: true,
        },
      ],
      topicListData: [
        {
          user: {
            userName: "longlong",
            useravatarImg: require("@/assets/img/avatar/1.jpg"),
          },
          usercomment:
            "有一点我是不是可以反驳一下。演员表里面有X战警版的快银所以关于孩子长大的部分，我是不是可以认为在剧集里面，能够看到疾速长大以后的样子",
          tagsdata: "李子柒刷新吉尼斯世界记录",
          like: { isLike: false, likeCount: 13 },
          commentData: {
            commentCount: 934,
            commentList: [
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
            ],
          },
        },
        {
          user: {
            userName: "longlong",
            useravatarImg: require("@/assets/img/avatar/john.jpg"),
          },
          usercomment:
            "有一点很奇怪，如果说旺达幻视是第四阶段开篇，飞机也确实说了远征是第三阶段最后一部，那为什么旺达幻视没有换漫威片头呢，之前每个阶段都不一样的",
          tagsdata: "猫和老鼠电影定档",
          like: { isLike: true, likeCount: 126 },
          commentData: {
            commentCount: 89,
            commentList: [
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
            ],
          },
        },
        {
          user: {
            userName: "longlong",
            useravatarImg: require("@/assets/img/avatar/2.jpg"),
          },
          usercomment:
            "国外本来就有送子鹤的传说，传说小孩子都是鹤送来的。。而不是从动画来的",
          tagsdata: "抖音起诉腾讯涉嫌垄断",
          like: { isLike: false, likeCount: 73 },
          commentData: {
            commentCount: 69,
            commentList: [
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
            ],
          },
        },
        {
          user: {
            userName: "longlong",
            useravatarImg: require("@/assets/img/avatar/3.jpg"),
          },
          usercomment:
            "看旺达幻视前三集看的一头雾水，看了一轮网上解析都不满意，就想看小神解析，终于等到，果然没让人失望，一如既往地牛逼格拉斯！",
          tagsdata: "黄奕感谢这个世界的包容",
          like: { isLike: true, likeCount: 184 },
          commentData: {
            commentCount: 17,
            commentList: [
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
              { username: "zhuzhu", commentContent: "这也太精彩了吧" },
            ],
          },
        },
      ],
    };
  },
  components: {
    Nav,
    topSwiper,
    TopicTimeLine,
    TopicList,
    Scroll,
  },
  created() {},
  computed: {},
  methods: {
    isLikeChange(index) {
      const that = this;
      if (that.topicListData[index].like.isLike) {
        that.topicListData[index].like.isLike = !that.topicListData[index].like
          .isLike;
        that.topicListData[index].like.likeCount--;
      } else {
        that.topicListData[index].like.isLike = !that.topicListData[index].like
          .isLike;
        that.topicListData[index].like.likeCount =
          that.topicListData[index].like.likeCount + 1;
      }
    },
    swiperImgLoad() {
      this.$refs.scroll.bs.refresh();
    },
  },
  mounted() {
    this.$refs.scroll.bs.refresh();
  },
  activated: function () {
    this.$refs.scroll.bs.refresh();
  },
};
</script>
<style scoped>
</style>