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
        <div class="right">
          <div class="name_tag">
            <div class="shortcut__name">{{ admin }}</div>

            <a
              href="javascript:;"
              class="iconfont shortcut__iconfont"
              @click="exitLogin"
              title="退出登录"
              >&#xe647;</a
            >
            <!-- <div class="iconfont shortcut__iconfont" @click="exitLogin">
              &#xe647;
            </div> -->
          </div>
          <div class="shortcut__Login" :class="{ style__green: styleShow }">
            {{ isLogin }}
          </div>
        </div>
        <div class="shortcut__hr"></div>
        <!-- <div></div>s -->
      </section>

      <keep-alive>
        <component
          :is="which"
          @changePage="changeToTeam"
          :itemListFromHome="itemListFromHome"
        ></component>
      </keep-alive>
      <router-view></router-view>
    </div>
    <div class="topimg"><img src="../assets/imgs/1.png" alt="" /></div>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import { post } from "../utils/request";
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
      isLogin: "未登录",
      admin: "", // 用户名
      styleShow: false, // 按钮框背景改为绿色
      itemListFromHome: {},
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
    },
    changeToTeam() {
      this.which = "Team";
    },
    exitLogin() {
      localStorage.removeItem("isLogin");
      this.$router.replace({ name: "LoginPasswd" });
    },
  },
  created() {
    // 从接口获取该用户数据
    post("/apply/myApply")
      .then((res) => {
        // console.log(res);

        if (res.data.result.code === 201) {
          // console.log("未报名");
          this.$store.state.peopleMessageList.admin =
            res.data.result.data.admin;
          this.$store.state.peopleMessageList.project = {
            id: "",
            teamName: "",
            workName: "",
            direction: "",
            ground: "",
            college: "",
            type: "",
            teacheriD: "",
            TeamId: "",
            fileLists: [],
          };
          this.$store.state.peopleMessageList.team = [
            {
              id: "",
              name: "",
              job: "",
              college: "",
              xueli: "",
              project: "",
              studentId: "",
              phone: "",
            },
          ];
          this.$store.state.peopleMessageList.teacher = {
            id: "",
            name: "",
            college: "",
            job: "",
            phone: "",
          };
        } else if (res.data.result.code !== 201) {
          // 初始化数据
          // console.log("已报名");
          // console.log(res.data.result);
          this.itemListFromHome = res.data.result.data.project;
          this.$store.state.peopleMessageList = res.data.result.data;
          this.$store.state.flag = 1;
        }

        if (this.$store.state.peopleMessageList.admin) {
          // 检测登录状态
          this.isLogin = "已登录";
          this.styleShow = true;
          this.admin = this.$store.state.peopleMessageList.admin;
        }
        // 设置登录后样式，右上角
        setTimeout(() => {
          if (res.data.result.code === 201) {
            alert("请开始报名，并注意及时保存信息，以免丢失数据");
          } else {
            alert("该队伍已报名，可继续修改信息并再次提交");
          }
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        alert("未知异常，请刷新网页");
      });
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
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/背景图.png) no-repeat center center;
  background-size: 100% 100%;
  overflow-y: hidden;
  z-index: -1;
}
.frame {
  position: absolute;
  // top: 50%;
  width: 13.2rem;
  height: 6.3rem;
  background-color: #ffffff;
  left: 1.08rem;
  right: 1.08rem;
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
  &__name {
    margin-top: -0.3rem;
    margin-right: 2.93rem;
    font-size: 0.23rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: right;
    color: #2c3e50;
    cursor: pointer;
    // border: 0.01rem solid red;
  }
  &__iconfont {
    float: right;
    margin-top: -0.28rem;
    margin-right: 2.4rem;
    font-size: 0.17rem;
    width: 0.8rem;
    height: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    color: #2c3e50;
    cursor: pointer;
    // border: .01rem solid red;
  }
  &__Login {
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
    // border: .01rem solid red;
  }
}

.style__green {
  background: #2ecc71;
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
