<template>
  <div class="sign">
    <h2 class="sign__title">报名信息</h2>
    <div class="sign__team">
      <div class="iconfont">&#xe741;</div>
      <div class="sign__text">团队名称</div>
      <input
        type="text"
        class="sign__input"
        placeholder="你说的都队"
        v-model="itemList.teamName"
      />
    </div>
    <div class="sign__homework">
      <div class="iconfont">&#xe741;</div>
      <div class="sign__text">作品名称</div>
      <input
        type="text"
        class="sign__input"
        placeholder="请填写作品名称"
        v-model="itemList.productionName"
      />
    </div>
    <div class="sign__type">
      <div class="iconfont sign__type__iconfont">&#xe741;</div>
      <div class="sign__text">作品类别</div>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.productionType.typeOne"
      >
        <option value="科技">科技</option>
        <option value="体育">体育</option>
        <option value="生活">生活</option>
        <option value="其他">其他</option>
      </select>
      &nbsp;
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.productionType.typeTwo"
      >
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
      <div class="sign__filePath">{{ file1Path }}</div>
      <input
        type="file"
        ref="files1"
        class="sign__file"
        @change="getFile1($event)"
      />
      <!-- 上传文件 end -->
    </div>
    <div class="sign__other">
      <div class="iconfont sign__other__iconfont">&#xe741;</div>
      <div class="sign__text">其他材料</div>
      <!-- 上传文件 start -->
      <button class="sign__xiugaibtn" @click="xiugaibtn2">上传文件</button>
      <!-- 显示文件路径 -->
      <div class="sign__filetext">{{ filepath2 }}</div>
      <div class="sign__filePath">{{ file2Path }}</div>
      <input
        type="file"
        ref="files2"
        class="sign__file"
        @change="getFile2($event)"
      />
      <!-- 上传文件 end -->
    </div>
    <div class="sign__add" @click="confirmMessage">保存</div>
    <div class="sign__cancel" @click="nextPage">下一页</div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      file1Path: "",
      file2Path: "",
      itemList: {
        teamName: "",
        productionName: "",
        productionType: {
          typeOne: "",
          typeTwo: "",
        },
        fileLists: {
          file1: "",
          file2: "",
        },
      },
    };
  },
  computed: {
    filepath1() {
      // return this.$refs.files.value;
      if (this.file1Path) {
        return "再次点击可重新上传";
      } else {
        return "未选择文件";
      }
    },
    filepath2() {
      // return this.$refs.files.value;
      if (this.file2Path) {
        return "再次点击可重新上传";
      } else {
        return "未选择文件";
      }
    },
  },
  methods: {
    xiugaibtn1() {
      this.$refs.files1.click(); // 绑定上传文件的事件
    },
    xiugaibtn2() {
      this.$refs.files2.click(); // 绑定上传文件的事件
    },
    getFile1(event) {
      this.file1Path = event.target.files[0].name;
      const file = event.target.files;
      this.itemList.fileLists.file1 = file;
      console.log(file);
      // console.log(this.$store.state.peopleMessageList);
    },
    getFile2(event) {
      this.file2Path = event.target.files[0].name;
      const file = event.target.files;
      this.itemList.fileLists.file2 = file;
      console.log(file);
    },
    confirmMessage() {
      this.$store.state.peopleMessageList.project.teamName =
        this.itemList.teamName;
      this.$store.state.peopleMessageList.project.productionName =
        this.itemList.productionName;
      this.$store.state.peopleMessageList.project.productionType.typeOne =
        this.itemList.productionType.typeOne;
      this.$store.state.peopleMessageList.project.productionType.typeTwo =
        this.itemList.productionType.typeTwo;
      this.$store.state.peopleMessageList.project.fileLists.file1 =
        this.itemList.fileLists.file1;
      this.$store.state.peopleMessageList.project.fileLists.file2 =
        this.itemList.fileLists.file2;
      console.log(this.$store.state.peopleMessageList);
      // console.log(this.$store.state.peopleMessageList.project.productionType);
    },
    nextPage() {
      this.$emit("changePage");
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
    border: 0.01rem solid #bbbbbb;
    outline: none;
    padding-left: 0.1rem;
    font-size: 0.13rem;
    box-sizing: border-box;
  }
  &__input:hover {
    border: 0.01rem solid black;
  }
  &__select {
    width: 2.5rem;
    height: 0.35rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    border: 0.01rem solid #bbbbbb;
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
    font-weight: bolder;
    margin: 0 0.2rem 0 0.25rem;
    width: 1.12rem;
    height: 0.26rem;
    line-height: 0.26rem;
    cursor: default;
    // border: 0.01rem solid red;
  }
  &__filePath {
    display: inline-block;
    position: absolute;
    top: 0.03rem;
    width: 2.5rem;
    height: 0.26rem;
    line-height: 0.26rem;
    // border: 0.01rem solid red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__add {
    position: absolute;
    margin: 4.5rem 0.7rem 0.3rem 1.5rem;
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
    margin: 4.5rem 0.7rem 0.3rem 3.6rem;
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
}
.low {
  margin-right: 0.7rem;
}
</style>
