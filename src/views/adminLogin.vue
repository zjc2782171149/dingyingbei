<template>
  <!-- <div class="create"> -->
  <div class="all">
    <div class="bottomimg"><img src="../assets/imgs/2.png" alt="" /></div>
    <div class="frame">
      <section class="shortcut">
        <div class="shortcut__show">未登录</div>
      </section>
      <div class="login">
        <img
          class="login__img"
          src="http://www.dell-lee.com/imgs/vue3/user.png"
        />
        <div class="login__change">
          <router-link to="/LoginPasswd">切换至用户登录</router-link>
        </div>
        <div class="login__input">
          <div class="login__input__text">登录名</div>
          <input
            class="login__input__content"
            placeholder="请输入登录名"
            v-model="player.admin"
          />
        </div>
        <div class="login__input">
          <div class="login__input__text">密码</div>
          <input
            class="login__input__content"
            type="password"
            placeholder="请输入密码"
            v-model="player.password"
          />
        </div>
        <button
          id="a"
          class="login__login-button"
          :class="{ allow: isClick }"
          @click="handleLogin()"
          :disabled="isClick"
        >
          登录
        </button>
        <div class="login__fail" v-show="loginSuccess">{{ errorMes }}</div>
      </div>
    </div>
    <div class="topimg"><img src="../assets/imgs/1.png" alt="" /></div>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import { post } from "../utils/request";

export default {
  name: "LoginPasswd",
  components: {},
  data() {
    return {
      player: {
        admin: "", // 登录名
        password: "", // 密码
      },
      loginSuccess: false,
      errorMes: "", // 登录错误的提示信息
    };
  },
  computed: {
    // 手机号和验证码都不能为空
    isClick() {
      if (this.player.admin && this.player.password) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    handleLogin() {
      // 点击发送
      const message = JSON.stringify(this.player);

      post("/user/login", message)
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            alert("管理员登录成功");
            // localStorage.isLogin = true;
            // this.$router.push({ name: "Home" });
          } else if (!res.data.user) {
            this.errorMes = res.data.msg;
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          } else {
            this.errorMes = "异常错误";
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          this.errorMes = "管理员账号错误";
          this.loginSuccess = true;
          setTimeout(() => {
            this.loginSuccess = false;
          }, 2000);
          // alert("服务器异常");
        });
    },
    phoneErrorClose() {
      this.phoneErrorShow = false;
    },
    checkPhone() {
      console.log("checkPhone");
      if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.phone)) {
        this.phoneErrorShow = true;
        this.phoneError = "手机号输入错误";
      }
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
.iconfont {
  position: absolute;
  margin-top: 0.11rem;
  font-size: 0.12rem;
  transform: scale(0.6);
  color: red;
  margin-left: -1.01rem;
}
.shortcut {
  height: 0.31rem;
  background: #fff;
  &__show {
    float: right;
    margin-top: 0.15rem;
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
    // border: 0.01rem solid red;
  }
}
.login {
  position: absolute;
  top: 50%;
  left: 4.3rem;
  right: 4.3rem;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__change {
    position: absolute;
    margin-top: -0.23rem;
    margin-left: 1.3rem;
    width: 2rem;
    height: 0.12rem;
    line-height: 0.12rem;
    text-align: center;
    color: red;
    font-size: 0.14rem;
  }
  &__input {
    height: 0.4rem;
    margin: 0 0.4rem 0.23rem 0.4rem;
    padding: 0 0.16rem;
    background: #ffffff;
    border: 0.01rem solid #bbbbbb;
    border-radius: 0.14rem;
    &__text {
      position: absolute;
      left: -0.3rem;
      margin-top: 0.1rem;
      font-size: 0.16rem;
    }
    &__content {
      line-height: 0.4rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: #9f9e9e;
      &::placeholder {
        color: #919191;
      }
    }
  }
  &__phoneButton {
    position: absolute;
    width: 0.8rem;
    margin-top: 0.11rem;
    right: 0.5rem;
    font-size: 0.14rem;
    border: none;
    background: #ffffff;
    cursor: pointer;
    // margin-right: 1rem;
  }
  &__login-button {
    margin: 0rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #00bdff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border: none;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
    width: 3.8rem;
    cursor: pointer;
  }
  &__login-button:hover {
    background: #19c3ff;
  }
  &__fail {
    position: absolute;
    margin: 0rem 0.4rem 0.16rem 0.4rem;
    font-size: 0.16rem;
    text-align: center;
    width: 3.8rem;
    color: red;
    // border: 1px solid red;
  }
}
.phone__error {
  position: absolute;
  margin-top: -0.17rem;
  margin-left: 0.5rem;
  width: 1.6rem;
  height: 0.12rem;
  line-height: 0.12rem;
  // text-align: center;
  color: red;
  font-size: 0.12rem;
  // border: 0.01rem solid red;
}
.allow {
  cursor: not-allowed;
}
a:hover {
  color: #00bdff;
}
a:active {
  color: #3498db;
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
