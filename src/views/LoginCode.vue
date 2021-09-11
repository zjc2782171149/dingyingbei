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
          <router-link to="/LoginPasswd">切换至密码登录</router-link>
        </div>
        <div class="login__input">
          <div class="login__input__text">手机号</div>
          <input
            class="login__input__content"
            placeholder="请输入手机号"
            v-model="personMessage.player.admin"
          />
          <button
            @click="getVerifyCode()"
            :disabled="disabled"
            class="login__phoneButton"
            :class="{ allow: disabled }"
          >
            {{ btnTitle }}
          </button>
        </div>
        <div v-if="error" class="login__error">
          {{ error.phone }}
        </div>
        <div class="login__input">
          <div class="login__input__text">验证码</div>
          <input
            class="login__input__content"
            placeholder="请输入验证码"
            v-model="personMessage.cacheCode"
          />
        </div>
        <div class="login__login">
          <router-link to="/register">没有账户？立即注册</router-link>
        </div>
        <button
          class="login__login-button"
          :class="{ allow: isClick }"
          @click="handleLogin()"
          :disabled="false"
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
import { post } from "../utils/request";

export default {
  name: "LoginCode",
  components: {},
  data() {
    return {
      personMessage: {
        player: {
          admin: "", // 登录名
          password: "", // 密码
        },
        messageId: "",
        cacheCode: "",
      },
      loginSuccess: false,
      disabled: false, // 是否可点击
      error: { phone: "" }, // 验证提示信息
      btnTitle: "获取验证码",
      registerFalse: false, // 登录错误的提示信息是否展示
      errorMes: "", // 登录错误的提示信息是否展示
    };
  },
  computed: {
    // 手机号和验证码都不能为空
    isClick() {
      if (this.personMessage.admin && this.personMessage.password) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    validatePhone() {
      // 判断输入的手机号是否合法
      if (!this.personMessage.player.admin) {
        this.error = { phone: "手机号码不能为空" };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.personMessage.player.admin)) {
        this.error = { phone: "请输入正确的手机号" };
        return false;
      } else {
        this.error = { phone: "" };
        return true;
      }
    },
    validateBtn() {
      // 倒计时
      let time = 60;
      const timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        // 先判断手机号是否合法
        this.validateBtn(); // 先将发送短信按钮给禁止，60s
        // 发送短信请求
        const message = { phone: this.personMessage.player.admin };
        post("/player/send", message)
          .then((res) => {
            alert("发送成功");
            console.log(res);
            this.personMessage.messageId = res.data.result.data.messageId;
          })
          .catch((err) => {
            console.log(err);
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 2000);
          });
        // 发送网络请求
      }
    },
    handleLogin() {
      // 点击发送
      const message = JSON.stringify(this.personMessage);

      post("/player/login", message)
        .then((res) => {
          console.log(res);
          if (res.data.player) {
            this.$store.state.name = res.data.player.name;
            // localStorage.isLogin = true;
            window.localStorage.setItem(
              "peopleMessage",
              JSON.stringify(res.user)
            );
            alert("登录成功");
            // this.$router.push({ name: "Home" });
          } else if (res.data.result.code === 401) {
            this.errorMes = res.data.result.message;
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          } else if (res.data.result.code === 402) {
            this.errorMes = res.data.result.message;
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          } else if (res.data.result.code === 403) {
            this.errorMes = res.data.result.message;
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          } else if (res.data.result.code === 404) {
            this.errorMes = res.data.result.message;
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          } else {
            this.errorMes = "手机号错误";
            this.loginSuccess = true;
            setTimeout(() => {
              this.loginSuccess = false;
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          this.loginSuccess = true;
          setTimeout(() => {
            this.loginSuccess = false;
          }, 2000);
          alert("登陆失败");
        });
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
  &__login {
    left: 4.3rem;
    right: 4.3rem;
    height: 0.12rem;
    line-height: 0.12rem;
    text-align: center;
    font-size: 0.14rem;
    cursor: pointer;
    // border: 0.01rem solid red;
  }
  &__login-button {
    margin: 0.2rem 0.4rem 0.16rem 0.4rem;
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
  &__error {
    position: absolute;
    margin-top: -0.19rem;
    margin-left: 0.5rem;
    width: 2rem;
    height: 0.12rem;
    line-height: 0.12rem;
    // text-align: center;
    color: red;
    font-size: 0.12rem;
    // border: 0.01rem solid red;
  }
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
