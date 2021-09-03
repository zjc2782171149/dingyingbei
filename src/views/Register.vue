<template>
  <!-- <div class="create"> -->
  <div class="all">
    <div class="bottomimg"><img src="../assets/imgs/2.png" alt="" /></div>
    <div class="frame">
      <section class="shortcut">
        <div class="shortcut__show">未登录</div>
      </section>
      <div class="register">
        <img
          class="register__img"
          src="http://www.dell-lee.com/imgs/vue3/user.png"
        />
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">昵称</div>
          <input
            class="register__input__content"
            placeholder="请输入昵称"
            v-model="personMessage.name"
          />
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">登录名</div>
          <input
            class="register__input__content"
            placeholder="请输入登录名"
            v-model="personMessage.id"
          />
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">手机号</div>
          <input
            class="register__input__content"
            placeholder="请输入手机号"
            v-model="personMessage.phone"
          />
          <button
            @click="getVerifyCode()"
            :disabled="personMessage.disabled"
            class="register__phoneButton"
          >
            {{ personMessage.btnTitle }}
          </button>
        </div>
        <div v-if="personMessage.error" class="register__error">
          {{ personMessage.error.phone }}
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">密码</div>
          <input
            class="register__input__content"
            type="password"
            placeholder="请输入密码"
            v-model="personMessage.password"
          />
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">验证码</div>
          <input
            class="register__input__content"
            placeholder="请输入验证码"
            v-model="personMessage.verifyCode"
          />
        </div>
        <div class="register__login">
          <router-link to="/LoginPasswd">已有账户？立即登录</router-link>
        </div>
        <button
          class="register__register-button"
          @click="handleRegister"
          :class="{ allow: isClick }"
          :disabled="isClick"
        >
          立即注册
        </button>
        <div class="register__fail" v-show="loginSuccess">注册失败</div>
      </div>
    </div>
    <div class="topimg"><img src="../assets/imgs/1.png" alt="" /></div>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import { request } from "../utils/request";
import axios from "axios";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      personMessage: {
        name: "", // 昵称
        id: "", // 登录名
        phone: "", // 手机号
        password: "", // 密码
        verifyCode: "", // 验证码
        disabled: false, // 是否可点击
        error: { phone: "" }, // 验证提示信息
        btnTitle: "获取验证码",
      },
      loginSuccess: false,
    };
  },
  computed: {
    // 手机号和验证码都不能为空
    isClick() {
      if (!this.personMessage.phone || !this.personMessage.verifyCode) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    validatePhone() {
      // console.log(this.personMessage.error.phone);
      // 判断输入的手机号是否合法
      // console.log(data);
      if (!this.personMessage.phone) {
        console.log("不能为空");
        this.personMessage.error = { phone: "手机号码不能为空" };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.personMessage.phone)) {
        console.log("请输入正确的手机号");
        this.personMessage.error = { phone: "请输入正确的手机号" };
        return false;
      } else {
        this.personMessage.error = { phone: "" };
        console.log("Phone right");
        return true;
      }
    },
    validateBtn() {
      // 倒计时
      let time = 60;
      const timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          this.personMessage.disabled = false;
          this.personMessage.btnTitle = "获取验证码";
        } else {
          this.personMessage.btnTitle = time + "秒后重试";
          this.personMessage.disabled = true;
          time--;
        }
      }, 1000);
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        this.validateBtn();
        request({ tpl_id: "", key: "", phone: this.phone })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        // 发送网络请求
        //   axios
        //     .post("/api/posts/sms_send", {
        //       // 注册聚合数据找到短信api服务，申请会得到两个tpl_id和key值，然后填入相对应的就行，具体还是和你门后端进行沟通
        //       tpl_id: "",
        //       key: "",
        //       phone: this.phone,
        //     })
        //     .then((res) => {
        //       console.log(res);
        //     });
      }
    },
    handleRegister() {
      // 点击发送
      this.errors = {};
      axios
        .post(
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register",
          {
            username: "username1",
            password: "password1",
          }
        )
        .then((res) => {
          console.log(res);
          alert("注册成功");
          this.$router.push("/loginPasswd");
        })
        .catch((err) => {
          console.log(err);
          this.loginSuccess = true;
          setTimeout(() => {
            this.loginSuccess = false;
          }, 2000);
          // alert("登陆失败");
        });
      // axios
      //   .post("/api/posts/sms_back", {
      //     phone: this.phone,
      //     code: this.verifyCode,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     localStorage.setItem("ele_login", true);
      //     this.$router.push("/");
      //   })
      //   .catch((error) => {
      //     // 返回错误信息
      //     this.errors = {
      //       code: error.response.data.msg,
      //     };
      //   });
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
    // border: 1px solid red;
  }
}
.register {
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
  &__input {
    height: 0.4rem;
    margin: 0 0.4rem 0.23rem 0.4rem;
    padding: 0 0.16rem;
    background: #ffffff;
    border: 1px solid #bbbbbb;
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
    // border: 1px solid red;
  }
  &__register-button {
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
  &__register-button:hover {
    background: #19c3ff;
  }
  &__fail {
    position: absolute;
    margin-left: 1.97rem;
    font-size: 0.16rem;
    color: red;
  }
  &__error {
    position: absolute;
    margin-top: -0.19rem;
    margin-left: 0.5rem;
    width: 1.3rem;
    height: 0.12rem;
    line-height: 0.12rem;
    // text-align: center;
    color: red;
    font-size: 0.12rem;
    // border: 1px solid red;
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
