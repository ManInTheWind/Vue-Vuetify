<!--  -->
<template>
  <v-container>
    <!-- Nav -->
    <Nav class="home-nav">
      <!-- v2.0 -->
      <template v-slot:left>
        <span class="headline">消息</span>
      </template>
      <template v-slot:right>
        <v-btn text class="px-0">
          <v-icon left color="secondary">mdi-google-downasaur</v-icon>
          <span class="caption grey--text">吐槽</span>
        </v-btn>
      </template>
    </Nav>

    <Scroll ref="scroll">
      <template v-slot:card-contain>
        <top-wrap />
        <message-list :messageItem="messageItem"></message-list>
      </template>
    </Scroll>
  </v-container>
</template>
W
<script>
import Nav from "@/components/common/Nav";
import Scroll from "@/components/common/Scroll";

import TopWrap from "./childComp/TopWrap";
import MessageList from "./childComp/MessageList";
export default {
  name: "",
  data() {
    return {
      messageItem: [
        {
          messageAvatar: require("@/assets/img/avatar/john.jpg"),
          userName: "李白不白",
          messageContent:
            "我是这么理解的:箭头函数内this指向定义的那个function，而定义的那个function又在外面被调用，谁调用指向谁，如果这里不改变this指向，应该会报undefind",
        },
        {
          messageAvatar: require("@/assets/img/avatar/2.jpg"),
          userName: "優しい少年",
          messageContent: `这里的指向应该是，把this指向传入的这个数组`,
        },
        {
          messageAvatar: require("@/assets/img/avatar/1.jpg"),
          userName: "孙博",
          messageContent: `不同之处是：call() 方法分别接受参数。apply() 方法接受数组形式的参数。如果要使用数组而不是参数列表，则 apply() 方法非常方便`,
        },
        {
          messageAvatar: require("@/assets/img/avatar/3.jpg"),
          userName: "小张不热心",
          messageContent:
            "请问各位大佬，我不小心把frm文件用记事本打开，如何恢复默认打开的样子呀",
        },
        {
          messageAvatar: require("@/assets/img/avatar/john.jpg"),
          userName: "也曾妄想万众瞩目",
          messageContent: "用params传参，不带双引号，用data有双引号",
        },
        {
          messageAvatar: require("@/assets/img/avatar/1.jpg"),
          userName: "这首歌需要六便士",
          messageContent:
            "服务器不是自己的，不封装是正常的， 就是封装传参有问题",
        },
        {
          messageAvatar: require("@/assets/img/avatar/3.jpg"),
          userName: "也曾妄想万众瞩目",
          messageContent: "用params传参，不带双引号，用data有双引号",
        },
        {
          messageAvatar: require("@/assets/img/avatar/john.jpg"),
          userName: "寄芸2023",
          messageContent: "做测试怎么测试都行到了上面就是不行",
        },
        {
          messageAvatar: require("@/assets/img/avatar/2.jpg"),
          userName: "欧康",
          messageContent:
            "@闭眼 聆听世界每个角度 你可以看看我的项目,我忘记接口是什么了",
        },
        {
          messageAvatar: require("@/assets/img/avatar/1.jpg"),
          userName: "優しい少年",
          messageContent:
            "刺客伍六七的最新那一集，太真实了，很多人都骂，人家只不过是戳破了大家的面具",
        },
        {
          messageAvatar: require("@/assets/img/avatar/3.jpg"),
          userName: "米团子",
          messageContent:
            "怎么说呢，当时第一次接触的就是他的视频，看了vue不明白想找视频看看",
        },
        {
          messageAvatar: require("@/assets/img/avatar/2.jpg"),
          userName: "牛麓野",
          messageContent: "别说 接下来是不是要往恐怖向发展",
        },
      ],
    };
  },
  components: {
    Nav,
    TopWrap,
    MessageList,
    Scroll,
  },
};
</script>
<style scoped>
.home-nav {
  position: fixed;
  z-index: 998;
  top: 0;
}
</style>