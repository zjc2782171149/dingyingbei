<template>
  <!-- <div class="create"> -->
  <div class="all">
    <div class="bottomimg"><img src="../assets/imgs/2.png" alt="" /></div>
    <div class="frame">
      <section class="shortcut">
        <div class="shortcut__fr">
          <span
            :class="{ styleAll_red: which === 'Item' }"
            @click="changeType('item')"
            >项目信息</span
          >
          <span
            :class="{ styleAll_red: which === 'Team' }"
            @click="changeType('team')"
            >团队信息</span
          >
          <span
            :class="{ styleAll_red: which === 'Teacher' }"
            @click="changeType('teacher')"
            >导师信息</span
          >
        </div>
        <div class="shortcut__show">未登录</div>
        <div class="shortcut__hr"></div>
        <!-- <div></div>s -->
      </section>

      <keep-alive>
        <component :is="which" @changePage="changeToTeam"></component>
      </keep-alive>
      <router-view></router-view>
      <!-- <router-view v-slot="{ which }">
        <keep-alive>
          <component :is="which"></component>
        </keep-alive>
      </router-view> -->
    </div>
    <div class="topimg"><img src="../assets/imgs/1.png" alt="" /></div>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import Item from "./Item";
import Team from "./Team";
import Teacher from "./Teacher";

export default {
  name: "Home",
  components: {
    Item,
    Team,
    Teacher,
  },
  data() {
    return {
      which: "Item",
    };
  },
  methods: {
    changeType(what) {
      if (what === "item") {
        this.which = "Item";
      } else if (what === "team") {
        this.which = "Team";
      } else {
        this.which = "Teacher";
      }
      // console.log(this.which);
    },
    changeToTeam() {
      this.which = "Team";
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../style/common";

html,
body {
  width: 100%;
  height: 100%;
}
.all {
  position: relative;
  width: 100%;
  height: 7.6rem;
  overflow-y: hidden;
  background: url(../assets/imgs/背景图.png) no-repeat;
  background-size: 100%;
}
.frame {
  position: absolute;
  width: 13.2rem;
  height: 6.3rem;
  background-color: #ffffff;
  left: 1.08rem;
  top: 1rem;
}
.shortcut {
  height: 0.31rem;
  background: #fff;
  &__fr span {
    display: inline-block;
    margin-left: 0.2rem;
    width: 1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    font-weight: bolder;
  }
  &__fr span:hover {
    background: #eee;
  }
  &__hr {
    margin: 0.1rem 0rem;
    height: 0.12rem;
    background: #eee;
  }
  &__show {
    float: right;
    margin-top: -0.3rem;
    margin-right: 1.8rem;
    font-size: 0.18rem;
    width: 0.8rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    color: #fff;
    background: grey;
    border-radius: 0.04rem;
    cursor: pointer;
    // border: 1px solid red;
  }
}

/* 图片样式 */
.topimg img {
  position: absolute;
  width: 2.05rem;
  height: 1.23rem;
  top: 0.25rem;
  right: 0.99rem;
  z-index: 1;
}
.bottomimg img {
  position: absolute;
  width: 1.35rem;
  height: 1.6rem;
  left: 0.2rem;
  bottom: -0.05rem;
  z-index: 1;
}
</style>
