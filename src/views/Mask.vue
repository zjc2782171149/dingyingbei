<template>
  <div class="mask">
    <div class="mask__name">
      <div class="iconfont">&#xe741;</div>
      <div class="mask__text">真实姓名</div>
      <input
        type="text"
        class="mask__input"
        placeholder="团队成员的真实姓名"
        v-model="store.state.peopleMessageList.team[index].name"
      />
    </div>
    <div class="mask__phone">
      <div class="iconfont">&#xe741;</div>
      <div class="mask__text">手机电话</div>
      <input
        type="text"
        class="mask__input"
        placeholder="团队成员的手机号码"
        v-model="store.state.peopleMessageList.team[index].phone"
      />
    </div>
    <div class="mask__number">
      <div class="iconfont">&#xe741;</div>
      <div class="mask__text">学号</div>
      <input
        type="text"
        class="mask__input mask__number__input"
        placeholder="团队成员的学号"
        v-model="store.state.peopleMessageList.team[index].number"
      />
    </div>
    <div class="mask__type">
      <div class="iconfont mask__type__iconfont">&#xe741;</div>
      <div class="mask__text">学生类型</div>
      <select
        name=""
        id=""
        class="mask__select mask__type__select"
        v-model="store.state.peopleMessageList.team[index].xueli"
      >
        <option value="本科生">本科生</option>
        <option value="研究生">研究生</option>
      </select>
    </div>
    <div class="mask__job">
      <div class="iconfont mask__job__iconfont">&#xe741;</div>
      <div class="mask__text">身份</div>
      <select
        name=""
        id=""
        class="mask__select mask__job__select"
        v-model="store.state.peopleMessageList.team[index].job"
      >
        <option value="负责人">负责人</option>
        <option value="成员">成员</option>
      </select>
    </div>
    <div class="mask__college">
      <div class="iconfont">&#xe741;</div>
      <div class="mask__text">学院</div>
      <input
        type="text"
        class="mask__input mask__college__input"
        placeholder="团队成员的学院"
        v-model="store.state.peopleMessageList.team[index].college"
      />
    </div>
    <div class="mask__zhuanye">
      <div class="iconfont">&#xe741;</div>
      <div class="mask__text">专业</div>
      <input
        type="text"
        class="mask__input mask__zhuanye__input"
        placeholder="团队成员的专业"
        v-model="store.state.peopleMessageList.team[index].project"
      />
    </div>
    <div class="mask__add" @click="cancelMask">添加</div>
    <div class="mask__cancel" @click="cancelMask">取消</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Mask",
  props: ["team", "index"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    cancelMask() {
      this.$emit("cancelMask");
      console.log(this.$store.state.peopleMessageList);
    },
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>

<style lang="scss" scoped>
.iconfont {
  position: absolute;
  margin-top: -0.02rem;
  font-size: 0.12rem;
  transform: scale(0.6);
  color: red;
  left: 0.05rem;
}
.mask {
  position: relative;
  margin: 0.01rem 0 0rem 0.3rem;
  // 公共样式 start
  &__select {
    width: 2.5rem;
    height: 0.35rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    border: 1px solid #bbbbbb;
    outline: none;
    padding-left: 0.1rem;
    font-size: 0.13rem;
    box-sizing: border-box;
  }
  &__text {
    display: inline-block;
    margin: 0 0.85rem 0 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    color: #9f9e9e;
    font-size: 0.14rem;
  }
  &__input {
    width: 2.7rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    border: 1px solid #bbbbbb;
    outline: none;
    padding: 0 0.1rem;
    font-size: 0.13rem;
    box-sizing: border-box;
  }
  &__input:hover {
    border: 1px solid black;
  }
  // 公共样式 end
  &__name {
    position: absolute;
    margin: 0.3rem 0;
  }
  &__phone {
    position: absolute;
    margin: 0.9rem 0;
  }
  &__number {
    position: absolute;
    margin: 1.5rem 0;
    &__input {
      margin-left: 0.28rem;
    }
  }
  &__type {
    position: absolute;
    margin: 2.1rem 0;
    &__iconfont {
      position: absolute;
      // margin-top: 0.06rem;
      font-size: 0.12rem;
      color: red;
    }
    &__select {
      width: 1.3rem;
      color: #757575;
    }
  }
  &__job {
    position: absolute;
    margin: 2.1rem 2rem;
    &__iconfont {
      position: absolute;
      // margin-top: 0.06rem;
      font-size: 0.12rem;
      color: red;
    }
    &__select {
      width: 1.3rem;
      color: #757575;
    }
  }
  &__college {
    display: inline-block;
    position: absolute;
    margin: 2.7rem 0;
    &__input {
      margin-left: 0.28rem;
      width: 1.5rem;
    }
  }
  &__zhuanye {
    display: inline-block;
    position: absolute;
    margin: 2.7rem 0 2.7rem 3.5rem;
    &__input {
      margin-left: 0rem;
      width: 1.5rem;
    }
  }
  &__add {
    position: absolute;
    margin: 3.4rem 0.7rem 0.3rem 1.7rem;
    width: 1.4rem;
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
    margin: 3.4rem 0.7rem 0.3rem 3.4rem;
    width: 1.4rem;
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
}
</style>
