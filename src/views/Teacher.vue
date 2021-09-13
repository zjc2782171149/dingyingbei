<template>
  <div class="teacher">
    <h2 class="teacher__title">指导老师</h2>
    <div class="choose">
      <div class="iconfont choose__imgs">&#xe601;</div>
      <div class="choose__name">{{ teacherShowMessage.name }}</div>
      <div class="choose__college">{{ teacherShowMessage.college }}</div>
      <div class="choose__job">{{ teacherShowMessage.job }}</div>
    </div>
    <div class="input">
      <div class="input__name">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">真实姓名</div>
        <input
          type="text"
          class="input__Input"
          v-model="teacher.name"
          placeholder="真实姓名"
        />
      </div>
      <div class="input__college">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">所在学院</div>
        <input
          type="text"
          class="input__Input"
          v-model="teacher.college"
          placeholder="所在学院"
        />
      </div>
      <div class="input__job">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">老师职称</div>
        <input
          type="text"
          class="input__Input"
          v-model="teacher.job"
          placeholder="老师职称"
        />
      </div>
      <div class="input__phone">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">手机号码</div>
        <input
          type="text"
          class="input__Input"
          v-model="teacher.phone"
          placeholder="电话号码"
        />
      </div>
      <div class="input__add" @click="confirmMessage">保存</div>
      <div class="input__cancel" @click="submit">提交报名信息</div>
    </div>
  </div>
</template>

<script>
import { post } from "../utils/request";

export default {
  name: "Teacher",
  data() {
    return {
      teacher: {
        id: "",
        name: "",
        college: "",
        job: "",
        phone: "",
      },
      teacherShowMessage: {
        id: "",
        name: "老师名称",
        college: "所在学院",
        job: "职称",
        phone: "",
      },
    };
  },
  created() {
    this.teacher = this.$store.state.peopleMessageList.teacher; // 直接与vuex中数据作关联
    this.teacherShowMessage.id = this.$store.state.peopleMessageList.teacher.id;
    this.teacherShowMessage.name =
      this.$store.state.peopleMessageList.teacher.name;
    this.teacherShowMessage.college =
      this.$store.state.peopleMessageList.teacher.college;
    this.teacherShowMessage.job =
      this.$store.state.peopleMessageList.teacher.job;
    this.teacherShowMessage.phone =
      this.$store.state.peopleMessageList.teacher.phone;
  },
  methods: {
    confirmMessage() {
      this.teacherShowMessage.name = this.teacher.name;
      this.teacherShowMessage.college = this.teacher.college;
      this.teacherShowMessage.job = this.teacher.job;
      this.teacherShowMessage.phone = this.teacher.phone;
      // 上面是choose框的展示，点击确认才关联上去并显示
    },
    submit() {
      const message = JSON.stringify(this.$store.state.peopleMessageList);
      post("/apply/submit", message)
        .then((res) => {
          console.log(res);
          alert("提交报名信息成功");
        })
        .catch((err) => {
          console.log(err);
          alert("服务器异常");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.iconimg {
  position: absolute;
  margin-top: 0.12rem;
  font-size: 0.12rem;
  transform: scale(0.6);
  color: red;
  top: -0.05rem;
  left: -0.15rem;
}
.teacher {
  position: relative;
  margin: 0.4rem 0.8rem 0.4rem 3rem;
  &__title {
    position: absolute;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.16rem;
  }
}
.choose {
  position: absolute;
  margin: 0.8rem 0.8rem 0.4rem 0.15rem;
  width: 3.76rem;
  height: 1.15rem;
  border: 0.01rem solid #bbbbbb;
  &__imgs {
    position: absolute;
    font-size: 0.75rem;
    top: 0.15rem;
    left: 0.2rem;
  }
  &__name {
    position: absolute;
    top: 0.32rem;
    left: 1.3rem;
    font-size: 0.26rem;
    width: 1.26rem;
    height: 0.32rem;
    line-height: 0.32rem;
    // border: 0.01rem solid red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__college {
    position: absolute;
    top: 0.75rem;
    left: 1.3rem;
    font-size: 0.15rem;
    width: 2.3rem;
    // border: 0.01rem solid red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__job {
    position: absolute;
    top: 0.45rem;
    left: 2.65rem;
    font-size: 0.2rem;
    width: 1rem;
    // border: 0.01rem solid red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__imgs2 {
    float: right;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    margin-right: 0.1rem;
    cursor: pointer;
  }
}
.input {
  position: absolute;
  border: 0.01rem solid #bbbbbb;
  width: 7rem;
  height: 2.5rem;
  background: #f5f5f5;
  margin: 2.4rem 0.8rem 0.4rem 0.15rem;
  font-size: 0.14rem;
  &__name {
    position: absolute;
    margin: 0.1rem 0.7rem 0.25rem 0.4rem;
    &__title {
      display: inline-block;
      font-size: 0.14rem;
      color: #9f9e9e;
      margin-right: 0.5rem;
    }
  }
  &__college {
    position: absolute;
    margin: 0.6rem 0.7rem 0.25rem 0.4rem;
    &__title {
      display: inline-block;
    }
  }
  &__job {
    position: absolute;
    margin: 1.1rem 0.7rem 0.25rem 0.4rem;
    &__title {
      display: inline-block;
    }
  }
  &__phone {
    position: absolute;
    margin: 1.6rem 0.7rem 0.25rem 0.4rem;
    &__title {
      display: inline-block;
    }
  }
  &__add {
    position: absolute;
    margin: 2.03rem 0.7rem 0.3rem 1.5rem;
    width: 1.3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #1c96d7;
    color: #fff;
    font-size: 0.16rem;
    border-radius: 0.04rem;
    cursor: pointer;
  }
  &__add:hover {
    background: #287bea;
  }
  &__cancel {
    position: absolute;
    margin: 2.03rem 0.7rem 0.3rem 3.2rem;
    width: 1.3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #a2a2a2;
    color: #000;
    font-size: 0.16rem;
    border-radius: 0.04rem;
    cursor: pointer;
  }
  &__cancel:hover {
    background: #bdc3c7;
  }
  &__title {
    display: inline-block;
    font-size: 0.14rem;
    color: #9f9e9e;
    margin-right: 0.5rem;
  }
  &__Input {
    width: 2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border-radius: 0.08rem;
    border: 0.01rem solid #bbbbbb;
    outline: none;
    padding-left: 0.1rem;
  }
  &__Input:hover {
    border: 0.01rem solid black;
  }
}
</style>
