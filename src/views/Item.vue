<template>
  <div class="sign">
    <h2 class="sign__title">报名信息</h2>
    <div class="sign__team">
      <div class="iconfont">&#xe741;</div>
      <div class="sign__text">团队名称</div>
      <input type="text" class="sign__input" placeholder="你说的都队" />
    </div>
    <div class="sign__homework">
      <div class="iconfont">&#xe741;</div>
      <div class="sign__text">作品名称</div>
      <input type="text" class="sign__input" placeholder="请填写作品名称" />
    </div>
    <div class="sign__type">
      <div class="iconfont sign__type__iconfont">&#xe741;</div>
      <div class="sign__text">作品类别</div>
      <select name="" id="" class="sign__select">
        <option value="科技">科技</option>
        <option value="体育">体育</option>
        <option value="生活">生活</option>
        <option value="其他">其他</option>
      </select>
      &nbsp;
      <select name="" id="" class="sign__select" placeholder="你说的都队">
        <option value="科技">科技</option>
        <option value="体育">体育</option>
        <option value="生活">生活</option>
        <option value="其他">其他</option>
      </select>
    </div>
    <div class="sign__book">
      <div class="iconfont sign__book__iconfont">&#xe741;</div>
      <div class="sign__text low">作品申报书</div>
      <!-- 上传文件 start -->
      <button class="sign__xiugaibtn" @click="xiugaibtn1">上传文件</button>
      <!-- 显示文件路径 -->
      <div class="sign__filetext">{{ filepath1 }}</div>
      <input type="file" ref="files1" class="sign__file" @change="printfile1" />
      <!-- 上传文件 end -->
    </div>
    <div class="sign__other">
      <div class="iconfont sign__other__iconfont">&#xe741;</div>
      <div class="sign__text">其他材料</div>
      <!-- 上传文件 start -->
      <button class="sign__xiugaibtn" @click="xiugaibtn2">上传文件</button>
      <!-- 显示文件路径 -->
      <div class="sign__filetext">{{ filepath2 }}</div>
      <input type="file" ref="files2" class="sign__file" @change="printfile2" />
      <!-- 上传文件 end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      haveFile1: "",
      haveFile2: "",
    };
  },
  computed: {
    filepath1() {
      // return this.$refs.files.value;
      if (this.haveFile1) {
        return "已选择文件";
      } else {
        return "未选择文件";
      }
    },
    filepath2() {
      // return this.$refs.files.value;
      if (this.haveFile2) {
        return "已选择文件";
      } else {
        return "未选择文件";
      }
    },
  },
  methods: {
    xiugaibtn1() {
      this.$refs.files1.click(); // 绑定上传文件的事件
    },
    printfile1() {
      // console.log(this.$refs.files);
      this.haveFile1 = this.$refs.files1;
    },
    xiugaibtn2() {
      this.$refs.files2.click(); // 绑定上传文件的事件
    },
    printfile2() {
      // console.log(this.$refs.files);
      this.haveFile2 = this.$refs.files2;
    },
  },
};
</script>

<style lang="scss" scoped>
.iconfont {
  position: absolute;
  margin-top: 0.12rem;
  font-size: 0.12rem;
  transform: scale(0.6);
  color: red;
  left: 0.05rem;
}
.sign {
  position: relative;
  margin: 0.4rem 0.8rem 0.4rem 3rem;
  &__title {
    position: absolute;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.16rem;
  }
  &__team {
    position: absolute;
    top: 0.3rem;
    margin: 0.5rem 0;
  }
  &__homework {
    position: absolute;
    top: 0.8rem;
    margin: 0.7rem 0;
  }
  &__type {
    position: absolute;
    top: 1.3rem;
    margin: 0.9rem 0;
    &__iconfont {
      position: absolute;
      margin-top: 0.06rem;
      font-size: 0.12rem;
      color: red;
    }
  }
  &__book {
    position: absolute;
    top: 1.8rem;
    margin: 1.1rem 0;
    &__iconfont {
      position: absolute;
      margin-top: 0.05rem;
      font-size: 0.12rem;
      color: red;
    }
  }
  &__other {
    position: absolute;
    top: 2.3rem;
    margin: 1.3rem 0;
    &__iconfont {
      position: absolute;
      margin-top: 0.05rem;
      font-size: 0.12rem;
      color: red;
    }
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
    width: 3.92rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    border: 1px solid #bbbbbb;
    outline: none;
    padding-left: 0.1rem;
    font-size: 0.13rem;
    box-sizing: border-box;
  }
  &__input:hover {
    border: 1px solid black;
  }
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
  // 上传文件
  &__file {
    display: none;
    position: absolute;
    opacity: 1;
  }
  &__xiugaibtn {
    width: 1rem;
    height: 0.3rem;
    color: #fff;
    background: #287bea;
    border: none;
    cursor: pointer;
    font-size: 0.14rem;
  }
  &__filetext {
    display: inline-block;
    top: 0.01rem;
    margin: 0 0.25rem;
    width: 1rem;
    height: 0.26rem;
    border: none;
  }
}
.low {
  margin-right: 0.7rem;
}
</style>
