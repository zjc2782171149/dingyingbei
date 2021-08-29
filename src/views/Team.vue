<template>
  <div class="team">
    <h2 class="team__title">团队信息</h2>
    <div class="team__box">
      <div class="team__member">
        <div class="iconfont team__imgs">&#xe601;</div>
        <div class="team__member__name">我的儿子</div>
        <div class="team__member__job">负责人</div>
        <div class="team__member__college">数学与信息学院</div>
        <div class="team__member__xueli">本科</div>
        <div class="team__member__project">软件工程</div>
        <div class="team__member__number">学号：11111111111111111111111</div>
        <div class="team__member__phone">联系方式：111111111111111111111</div>
        <div class="iconfont team__imgs2">&#xe604;</div>
      </div>
      <div class="team__member">
        <div class="iconfont team__imgs">&#xe601;</div>
        <div class="team__member__name">我的儿子</div>
        <div class="team__member__job">负责人</div>
        <div class="team__member__college">数学与信息学院</div>
        <div class="team__member__xueli">本科</div>
        <div class="team__member__project">软件工程</div>
        <div class="team__member__number">学号：</div>
        <div class="team__member__phone">联系方式：</div>
        <div class="iconfont team__imgs2">&#xe604;</div>
      </div>
      <div class="team__member">
        <div class="iconfont team__imgs">&#xe601;</div>
        <div class="team__member__name">我的儿子</div>
        <div class="team__member__job">负责人</div>
        <div class="team__member__college">数学与信息学院</div>
        <div class="team__member__xueli">本科</div>
        <div class="team__member__project">软件工程</div>
        <div class="team__member__number">学号：</div>
        <div class="team__member__phone">联系方式：</div>
        <div class="iconfont team__imgs2">&#xe604;</div>
      </div>
    </div>
    <div class="team__addMember">
      <div class="iconfont team__add">&#xe641;</div>
      <div class="team__character">添加团队成员</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style lang="scss" scoped>
.iconfont {
  position: absolute;
  margin-top: 0.12rem;
  font-size: 0.12rem;
  // color: red;
}
.team {
  margin: 0.4rem 0.8rem 0.4rem 3rem;
  &__title {
    position: relative;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.1rem;
  }
  &__box {
    overflow-y: scroll;
    width: 6.4rem;
    height: 4rem;
    // border: 1px solid #bbbbbb;
  }
  &__member {
    position: relative;
    width: 6rem;
    height: 1.46rem;
    line-height: 0.8rem;
    margin: 0 0 0.3rem 0;
    border: 1px solid #bbbbbb;
    cursor: default;
    &__name {
      position: absolute;
      left: 1rem;
      font-size: 0.17rem;
    }
    &__job {
      position: absolute;
      top: 0.02rem;
      left: 1.8rem;
    }
    &__college {
      position: absolute;
      top: 0.4rem;
      left: 1rem;
    }
    &__xueli {
      position: absolute;
      top: 0.65rem;
      left: 1rem;
    }
    &__project {
      position: absolute;
      top: 0.65rem;
      left: 1.3rem;
    }
    &__number {
      position: absolute;
      top: 0.25rem;
      left: 3.8rem;
      width: 1.8rem;
      height: 0.3rem;
      line-height: 0.3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &__phone {
      position: absolute;
      top: 0.7rem;
      left: 3.8rem;
      width: 1.83rem;
      height: 0.3rem;
      line-height: 0.3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &__addMember {
    position: relative;
    top: 0.4rem;
    cursor: pointer;
  }
  &__add {
    position: absolute;
    font-size: 0.16rem;
    color: #0c48db;
    top: -0.13rem;
    left: 0.08rem;
  }
  &__character {
    position: absolute;
    font-size: 0.18rem;
    color: #0c48db;
    // font-weight: bolder;
    left: 0.3rem;
  }
  &__imgs {
    position: absolute;
    font-size: 0.4rem;
    top: -0.1rem;
    left: 0.25rem;
  }
  &__imgs2 {
    position: absolute;
    margin-top: -0.2rem;
    right: 0.1rem;
    font-size: 0.18rem;
    cursor: pointer;
  }
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
