<template>
  <div class="teacher">
    <h2 class="teacher__title">指导老师</h2>
    <div class="choose">
      <div class="iconfont choose__imgs">&#xe601;</div>
      <div class="choose__name">林钻辉</div>
      <div class="choose__college">创新创业学院</div>
      <div class="choose__job">副教授</div>
      <div class="iconfont choose__imgs2">&#xe604;</div>
    </div>
    <div class="input">
      <div class="input__name">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">真实姓名</div>
        <input type="text" class="input__Input" />
      </div>
      <div class="input__college">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">所在学院</div>
        <input type="text" class="input__Input" />
      </div>
      <div class="input__job">
        <div class="iconfont iconimg">&#xe741;</div>
        <div class="input__title">老师职称</div>
        <input type="text" class="input__Input" />
      </div>
      <div class="input__add">添加</div>
      <div class="input__cancel">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher",
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
  border: 1px solid #bbbbbb;
  &__imgs {
    position: absolute;
    font-size: 0.75rem;
    top: 0.15rem;
    left: 0.2rem;
  }
  &__name {
    position: relative;
    top: 0.32rem;
    left: 1.3rem;
    font-size: 0.26rem;
  }
  &__college {
    position: relative;
    top: 0.42rem;
    left: 1.3rem;
    font-size: 0.15rem;
  }
  &__job {
    position: relative;
    top: 0.01rem;
    left: 2.5rem;
    font-size: 0.2rem;
  }
  &__imgs2 {
    float: right;
    font-size: 0.2rem;
    margin-top: -0.58rem;
    margin-right: 0.13rem;
    cursor: pointer;
  }
}
.input {
  position: absolute;
  border: 1px solid #bbbbbb;
  width: 7rem;
  height: 2.5rem;
  background: #f5f5f5;
  margin: 2.4rem 0.8rem 0.4rem 0.15rem;
  font-size: 0.14rem;
  &__name {
    position: absolute;
    margin: 0.3rem 0.7rem 0.3rem 0.4rem;
    &__title {
      display: inline-block;
      font-size: 0.14rem;
      color: #9f9e9e;
      margin-right: 0.5rem;
    }
  }
  &__college {
    position: absolute;
    margin: 0.8rem 0.7rem 0.3rem 0.4rem;
    &__title {
      display: inline-block;
    }
  }
  &__job {
    position: absolute;
    margin: 1.3rem 0.7rem 0.3rem 0.4rem;
    &__title {
      display: inline-block;
    }
  }
  &__add {
    position: absolute;
    margin: 2rem 0.7rem 0.3rem 1.5rem;
    width: 1.3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #287bea;
    color: #fff;
    border-radius: 0.04rem;
    cursor: pointer;
  }
  &__cancel {
    position: absolute;
    margin: 2rem 0.7rem 0.3rem 3.2rem;
    width: 1.3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #a2a2a2;
    color: #000;
    border-radius: 0.04rem;
    cursor: pointer;
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
    border: 1px solid #bbbbbb;
    outline: none;
    padding-left: 0.1rem;
  }
  &__Input:hover {
    border: 1px solid black;
  }
}
</style>
