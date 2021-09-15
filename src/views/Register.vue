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
            v-model="personMes.player.name"
          />
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">登录名</div>
          <input
            class="register__input__content"
            placeholder="请输入登录名"
            v-model="personMes.player.admin"
            @input="checkAdminRight"
          />
        </div>
        <div v-if="Adminerror" class="register__Adminerror">
          {{ error.admin }}
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">手机号</div>
          <input
            class="register__input__content"
            placeholder="请输入手机号"
            v-model="personMes.player.phone"
          />
          <button
            class="register__phoneButton"
            :class="{ allow: disabled }"
            @click="getVerifyCode()"
            :disabled="disabled"
          >
            {{ btnTitle }}
          </button>
        </div>
        <div v-if="error" class="register__error">
          {{ error.phone }}
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">密码</div>
          <input
            class="register__input__content"
            type="password"
            placeholder="请输入密码"
            v-model="personMes.player.password"
            @input="checkPasswdRight"
          />
        </div>
        <div v-if="Passwderror" class="register__Passwderror">
          {{ error.passwd }}
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text passwd_re">Again</div>
          <input
            class="register__input__content"
            type="password"
            placeholder="请再次输入密码"
            v-model="password_re"
            @input="checkPasswdRight_re"
          />
        </div>
        <div v-if="Passwderror_re" class="register__Passwderror_re">
          {{ error.passwd_re }}
        </div>
        <div class="register__input">
          <div class="iconfont">&#xe741;</div>
          <div class="register__input__text">验证码</div>
          <input
            class="register__input__content"
            :class="{ allow: !flag }"
            placeholder="请输入验证码"
            v-model="personMes.cacheCode"
            :disabled="!flag"
          />
        </div>
        <!-- <div class="iconfont register__del" @click="del">&#xe732;</div> -->
        <div class="register__login">
          <router-link to="/LoginPasswd">已有账户？立即登录</router-link>
        </div>
        <button
          class="register__register-button"
          @click="handleRegister"
          :class="{
            allow: isClick || adminRight || passwdRight || passwdRight_re,
          }"
          :disabled="isClick || adminRight || passwdRight || passwdRight_re"
        >
          立即注册
        </button>
        <div class="register__fail" v-show="registerFalse">{{ errorMes }}</div>
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
  name: "Register",
  components: {},
  data() {
    return {
      personMes: {
        player: {
          name: "", // 昵称
          admin: "", // 登录名
          phone: "", // 手机号
          password: "", // 密码
        }, // 用户信息
        messageId: "", // 发送短信时返回的短信id
        cacheCode: "", // 验证码
      },
      password_re: "", // 再次输入的密码
      disabled: false, // 是否可点击
      error: { phone: "" }, // 验证提示信息
      btnTitle: "获取验证码",
      registerFalse: false, // 注册错误的提示信息是否展示
      errorMes: "", // 注册错误的提示信息
      flag: false, // 控制验证码框是否允许输入
      // 用户名验证
      adminRight: false, // 检测用户名是否符合要求
      Adminerror: false, // 用户名错误提示
      // 密码验证
      passwdRight: false, // 检测密码是否符合要求
      Passwderror: false, // 密码错误提示
      // 再次输入的密码验证
      passwdRight_re: false, // 检测密码是否符合要求
      Passwderror_re: false, // 密码错误提示
    };
  },
  computed: {
    // 手机号和验证码都不能为空
    isClick() {
      if (
        this.personMes.player.name &&
        this.personMes.player.admin &&
        this.personMes.player.phone &&
        this.personMes.player.password &&
        this.personMes.cacheCode
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    validatePhone() {
      // 判断输入的手机号是否合法
      if (!this.personMes.player.phone) {
        this.error.phone = "手机号码不能为空";
        return false;
      } else if (!/^1[0-9]{10}$/.test(this.personMes.player.phone)) {
        this.error.phone = "请输入正确的手机号";
        return false;
      } else {
        this.error.phone = "";
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
        this.flag = true;
        // 发送短信请求
        const message = { phone: this.personMes.player.phone };
        post("/player/send", message)
          .then((res) => {
            alert("发送成功");
            // console.log(res);
            this.personMes.messageId = res.data.result.data.messageId;
          })
          .catch((err) => {
            console.log(err);
            this.registerFalse = true;
            setTimeout(() => {
              this.registerFalse = false;
            }, 2000);
            // alert("登陆失败");
          });
        // 发送网络请求
      }
    },
    handleRegister() {
      // 点击发送
      this.errors = {};
      const message = JSON.stringify(this.personMes);

      post("/player/register", message)
        .then((res) => {
          console.log(res);
          if (res.data.result.code === 200) {
            alert("注册成功");
            this.$router.replace("/LoginPasswd");
          } else if (res.data.result.code !== 200) {
            this.errorMes = res.data.result.message;
            this.registerFalse = true;
            setTimeout(() => {
              this.registerFalse = false;
            }, 3000);
          } else {
            this.errorMes = "异常错误";
            this.registerFalse = true;
            setTimeout(() => {
              this.registerFalse = false;
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          this.errorMes = "服务器错误";
          this.registerFalse = true;
          setTimeout(() => {
            this.registerFalse = false;
          }, 3000);
        });
    },
    // del() {
    //   const message = this.personMes.player;
    //   post("/player/del", message)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.registerFalse = true;
    //       setTimeout(() => {
    //         this.registerFalse = false;
    //       }, 2000);
    //       // alert("登陆失败");
    //     });
    //   // 发送网络请求
    // },
    checkAdminRight() {
      const patrn = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (patrn.exec(this.personMes.player.admin)) {
        // console.log("用户名输入合法");
        this.error.admin = "";
        this.Adminerror = false;
        this.adminRight = false;
      } else {
        // console.log("用户名输入不合法");
        if (this.personMes.player.admin.length < 5) {
          this.error.admin = "用户名不得少于五位数";
        } else if (this.personMes.player.admin.length > 16) {
          this.error.admin = "用户名不得多于十六位数";
        } else {
          this.error.admin = "用户名只允许字母数字下划线且以字母开头";
        }
        this.Adminerror = true;
        this.adminRight = true;
        // setTimeout(() => {
        //   this.Adminerror = false;
        // }, 4000);
      }
    },
    checkPasswdRight() {
      const patrn = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (patrn.exec(this.personMes.player.password)) {
        // console.log("密码输入合法");
        this.error.passwd = "";
        this.Passwderror = false;
        this.passwdRight = false;
      } else {
        // console.log("密码输入不合法");
        if (this.personMes.player.password.length < 5) {
          this.error.passwd = "密码不得少于五位数";
        } else if (this.personMes.player.password.length > 16) {
          this.error.passwd = "密码不得多于十六位数";
        } else {
          this.error.passwd = "密码只允许字母数字下划线且以字母开头";
        }
        this.Passwderror = true;
        this.passwdRight = true;
        // setTimeout(() => {
        //   this.Passwderror = false;
        // }, 4000);
      }
    },
    checkPasswdRight_re() {
      if (this.password_re !== this.personMes.player.password) {
        this.error.passwd_re = "两次输入密码不一致";
        this.Passwderror_re = true;
        this.passwdRight_re = true;
        // setTimeout(() => {
        //   this.Passwderror_re = false;
        // }, 4000);
      } else {
        this.error.passwd_re = "";
        this.Passwderror_re = false;
        this.passwdRight_re = false;
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
.register {
  position: absolute;
  top: 50%;
  left: 4.3rem;
  right: 4.3rem;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.2rem auto;
    width: 0.66rem;
    height: 0.66rem;
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
  &__Adminerror {
    position: absolute;
    margin-top: -0.2rem;
    margin-left: 0.5rem;
    width: 4rem;
    height: 0.12rem;
    line-height: 0.12rem;
    // text-align: center;
    color: red;
    font-size: 0.12rem;
    // border: 0.01rem solid red;
  }
  &__Passwderror {
    position: absolute;
    margin-top: -0.2rem;
    margin-left: 0.5rem;
    width: 4rem;
    height: 0.12rem;
    line-height: 0.12rem;
    // text-align: center;
    color: red;
    font-size: 0.12rem;
    // border: 0.01rem solid red;
  }
  &__Passwderror_re {
    position: absolute;
    margin-top: -0.2rem;
    margin-left: 0.5rem;
    width: 4rem;
    height: 0.12rem;
    line-height: 0.12rem;
    // text-align: center;
    color: red;
    font-size: 0.12rem;
    // border: 0.01rem solid red;
  }
  // &__del {
  //   left: 1rem;
  //   text-align: center;
  //   font-size: 0.4rem;
  //   cursor: pointer;
  // }
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
  &__register-button {
    margin: 0.2rem 0.4rem 0.12rem 0.4rem;
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
    margin: -0.03rem 0.4rem 0.16rem 0.4rem;
    font-size: 0.16rem;
    text-align: center;
    width: 3.8rem;
    color: red;
    // border: 1px solid red;
  }
}
.passwd_re {
  // margin-top: -0.01rem;
  width: 0.6rem;
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
