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
        v-model="itemList.workName"
      />
    </div>
    <div class="sign__type">
      <div class="iconfont sign__type__iconfont">&#xe741;</div>
      <div class="sign__text">作品类别</div>
      <el-cascader
        v-model="value"
        :options="options"
        :placeholder="PlaceHolder"
        @change="handleChange"
        style="width: 300px"
      ></el-cascader>
      <div class="sign__input--select" v-show="optionShow">
        <span>请填写:</span>
        <input type="text" v-model="other" />
      </div>
      <!-- <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.direction"
        @change="changeType"
      >
        <option value="A类：实用技术发明类">A类：实用技术发明类</option>
        <option value="B类：创新创意设计类">B类：创新创意设计类</option>
        <option value="C类：科学实践论文类">C类：科学实践论文类</option>
        <option value="D类：文学作品类">D类：文学作品类</option>
        <option value="E类：广告创意设计类">E类：广告创意设计类</option>
        <option value="F类：商业计划类">F类：商业计划类</option>
        <option value="G类：社会科学调研类">G类：社会科学调研类</option>
      </select>
      &nbsp;
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.aa"
        @change="otherInputShow"
        autocomplete="off"
      >
        <option value="机械与控制" selected>机械与控制</option>
        <option value="信息技术">信息技术</option>
        <option value="生命科学">生命科学</option>
        <option value="能源化工">能源化工</option>
        <option value="其他">其他</option>
      </select>
      <div class="sign__input--select" v-show="optionShow1">
        <span>请填写:</span>
        <input type="text" v-model="itemList.ground" />
      </div>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.bb"
        @change="otherInputShow"
      >
        <option value="机械与控制" selected>机械与控制</option>
        <option value="信息技术">信息技术</option>
        <option value="生命科学">生命科学</option>
        <option value="能源化工">能源化工</option>
        <option value="其他">其他</option>
      </select>
      <div class="sign__input--select" v-show="optionShow2">
        <span>请填写:</span>
        <input type="text" v-model="itemList.ground" />
      </div>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.cc"
        @change="otherInputShow"
      >
        <option value="机械与控制" selected>机械与控制</option>
        <option value="信息技术">信息技术</option>
        <option value="生命科学">生命科学</option>
        <option value="能源化工">能源化工</option>
        <option value="数理">数理</option>
        <option value="其他">其他</option>
      </select>
      <div class="sign__input--select" v-show="optionShow3">
        <span>请填写:</span>
        <input type="text" v-model="itemList.ground" />
      </div>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.dd"
        disabled
      >
        <option value="无选项" selected>无选项</option>
      </select>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.ee"
        disabled
      >
        <option value="无选项" selected>无选项</option>
      </select>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.ff"
        disabled
      >
        <option value="无选项" selected>无选项</option>
      </select>
      <select
        name=""
        id=""
        class="sign__select"
        v-model="itemList.ground"
        v-show="optionArray.gg"
        disabled
      >
        <option value="无选项" selected>无选项</option>
      </select> -->
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
// import { post } from "../utils/request";

export default {
  name: "Item",
  props: ["itemListFromHome"],
  data() {
    return {
      file1Path: "",
      file2Path: "",
      other: "",
      itemList: {
        teamName: "",
        workName: "",
        direction: "",
        ground: "",
      },
      optionShow: false,
      // 以下是级联选择器内容
      value: [],
      props: { expandTrigger: "hover" },
      options: [
        {
          value: "A类：实用技术发明类",
          label: "A类：实用技术发明类",
          children: [
            {
              value: "机械与控制",
              label: "机械与控制",
            },
            {
              value: "信息技术",
              label: "信息技术",
            },
            {
              value: "生命科学",
              label: "生命科学",
            },
            {
              value: "能源化工",
              label: "能源化工",
            },
            {
              value: "其他",
              label: "其他",
            },
          ],
        },
        {
          value: "B类：创新创意设计类",
          label: "B类：创新创意设计类",
          children: [
            {
              value: "机械与控制",
              label: "机械与控制",
            },
            {
              value: "信息技术",
              label: "信息技术",
            },
            {
              value: "生命科学",
              label: "生命科学",
            },
            {
              value: "能源化工",
              label: "能源化工",
            },
            {
              value: "其他",
              label: "其他",
            },
          ],
        },
        {
          value: "C类：科学实践论文类",
          label: "C类：科学实践论文类",
          children: [
            {
              value: "机械与控制",
              label: "机械与控制",
            },
            {
              value: "信息技术",
              label: "信息技术",
            },
            {
              value: "生命科学",
              label: "生命科学",
            },
            {
              value: "能源化工",
              label: "能源化工",
            },
            {
              value: "其他",
              label: "其他",
            },
          ],
        },
        {
          value: "C类：科学实践论文类",
          label: "C类：科学实践论文类",
          children: [
            {
              value: "机械与控制",
              label: "机械与控制",
            },
            {
              value: "信息技术",
              label: "信息技术",
            },
            {
              value: "生命科学",
              label: "生命科学",
            },
            {
              value: "能源化工",
              label: "能源化工",
            },
            {
              value: "其他",
              label: "其他",
            },
          ],
        },
        {
          value: "D类：文学作品类",
          label: "D类：文学作品类",
        },
        {
          value: "E类：广告创意设计类",
          label: "E类：广告创意设计类",
        },
        {
          value: "F类：商业计划类",
          label: "F类：商业计划类",
        },
        {
          value: "G类：社会科学调研类",
          label: "G类：社会科学调研类",
        },
      ],
    };
  },
  watch: {
    itemListFromHome: function (newVal, oldVal) {
      this.itemList = newVal; // newVal便是itemList
      // console.log(this.itemList);
      this.value[0] = this.itemList.direction;
      newVal && this.changeGround();
      this.value[1] = this.itemList.ground;
      // console.log(this.itemList);
      // newVal && this.changeType();
      // newVal && this.otherInputShow();
    },
  },
  computed: {
    PlaceHolder() {
      if (!this.itemList.direction) {
        return "请选择组别";
      } else {
        return `${this.itemList.direction}/${this.itemList.ground}`;
      }
    },
    filepath1() {
      if (this.file1Path) {
        return "再次点击可重新上传";
      } else {
        return "未选择文件";
      }
    },
    filepath2() {
      if (this.file2Path) {
        return "再次点击可重新上传";
      } else {
        return "未选择文件";
      }
    },
  },
  methods: {
    // 初始化数据时，对级联选择器的初始化
    changeGround() {
      if (
        this.itemList.ground !== "机械与控制" &&
        this.itemList.ground !== "信息技术" &&
        this.itemList.ground !== "生命科学" &&
        this.itemList.ground !== "能源化工"
      ) {
        this.other = this.itemList.ground; // 将ground值赋值给input输入框
        this.$store.state.other = this.itemList.ground;
        this.itemList.ground = "其他";
        this.optionShow = true;
      }
      console.log(this.itemList);
    },
    handleChange() {
      console.log(this.value);
      this.itemList.direction = this.value[0];
      this.itemList.ground = this.value[1];
      // 给本地对象赋值
      if (this.itemList.ground === "其他") {
        this.optionShow = true;
      } else {
        this.optionShow = false;
      }
    },
    xiugaibtn1() {
      this.$refs.files1.click(); // 绑定上传文件的事件
    },
    xiugaibtn2() {
      this.$refs.files2.click(); // 绑定上传文件的事件
    },
    getFile1(event) {
      this.file1Path = event.target.files[0].name;
      // const file = new Blob(event.target.files);
      // const reader = new FileReader();
      // reader.readAsArrayBuffer(file);
      // reader.addEventListener("loadend", function () {
      //   console.log(reader.result);
      // });
      // const file = event.target.files[0];
      // post("一个url", file).then((res) => {});
    },
    getFile2(event) {
      this.file2Path = event.target.files[0].name;
      // const file = event.target.files[0];
      // this.itemList.fileLists.file2 = file;
      // console.log(file);
    },
    confirmMessage() {
      this.$store.state.peopleMessageList.project.teamName =
        this.itemList.teamName;
      this.$store.state.peopleMessageList.project.workName =
        this.itemList.workName;
      this.$store.state.peopleMessageList.project.direction =
        this.itemList.direction;
      if (this.itemList.ground === "其他" && this.other) {
        this.$store.state.peopleMessageList.project.ground = this.other;
        this.$store.state.other = this.other;
      } else {
        this.$store.state.peopleMessageList.project.ground =
          this.itemList.ground;
        this.$store.state.other = this.itemList.ground;
        this.other = "";
      }

      console.log(this.$store.state.peopleMessageList.project);
      alert("项目信息保存成功");
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
    &--select input {
      position: absolute;
      // display: inline-block;
      left: 5.8rem;
      top: 0.06rem;
      margin-left: 0.08rem;
      padding-left: 0.05rem;
      padding-bottom: 0rem;
      width: 1rem;
      height: 0.25rem;
      line-height: 0.25rem;
      border: none;
      border-bottom: 0.01rem solid #bbbbbb;
      outline: none;
    }
    &--select span {
      position: absolute;
      display: inline-block;
      width: 0.7rem;
      left: 4.7rem;
      top: 0.11rem;
    }
    &--select input {
      position: absolute;
      display: inline-block;
      font-size: 0.13rem;
      width: 0.7rem;
      left: 5.05rem;
      top: 0.04rem;
    }
  }
  &__input:hover {
    border: 0.01rem solid black;
  }
  &__select {
    width: 1.8rem;
    height: 0.35rem;
    line-height: 0.35rem;
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
