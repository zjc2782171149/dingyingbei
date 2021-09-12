<template>
  <div class="team">
    <h2 class="team__title">团队信息</h2>
    <div class="team__college">所属学院：</div>
    <div class="team__college__input">{{ college }}</div>
    <div class="team__type">所属组别：</div>
    <div class="team__type__input">{{ type }}</div>
    <div class="team__box__title">成员信息</div>
    <div class="team__box">
      <div class="team__member" v-for="(item, index) in team" :key="index">
        <div class="iconfont team__imgPeople">&#xe601;</div>

        <div class="team__member__name">姓名：{{ item.name }}</div>
        <!-- <div class="team__member__job">{{ item.job }}</div> -->

        <div class="team__member__college">学院：{{ item.college }}</div>

        <div class="team__member__xueli">学历：{{ item.xueli }}</div>

        <div class="team__member__project">专业：{{ item.project }}</div>
        <div class="team__member__number">学号：{{ item.studentId }}</div>
        <div class="team__member__phone">联系方式：{{ item.phone }}</div>
        <div class="iconfont team__imgCopy" @click="openMaskShow(index)">
          &#xe604;
        </div>
        <div class="iconfont team__imgDelete" @click="deleteMember(index)">
          &#xe732;
        </div>
        <div class="maskItem" v-if="addShow">
          <div class="maskItem__frame">
            <Mask @cancelMask="closeMask" />
          </div>
        </div>
        <div class="team__job">
          <div class="team__job__job">{{ item.job }}</div>
        </div>
      </div>
    </div>
    <div class="team__addMember" @click="addTeamMember">
      <div class="iconfont team__add">&#xe641;</div>
      <div class="team__character">添加团队成员</div>
    </div>
  </div>
</template>

<script>
import Mask from "../components/Mask.vue";

export default {
  name: "Team",
  components: {
    Mask,
  },
  data() {
    return {
      addShow: false,
      team: [
        {
          id: "",
          name: "",
          job: "",
          college: "",
          xueli: "",
          project: "",
          studentId: "",
          phone: "",
        },
      ],
      college: "",
      type: "",
    };
  },
  methods: {
    // 蒙层的展示 start
    openMaskShow(index) {
      this.addShow = !this.addShow;
      this.$store.commit("changeIndex", index);
      // console.log(this.$store.state);
    },
    closeMask() {
      this.addShow = false;
    },
    // 蒙层的展示 end
    // 团队人员的增删 start
    addTeamMember() {
      this.team.push({
        id: "",
        name: "",
        job: "",
        college: "",
        xueli: "",
        project: "",
        studentId: "",
        phone: "",
      });
    },
    deleteMember(indexMember) {
      this.team.forEach((item, index) => {
        if (index === indexMember) {
          this.team.splice(index, 1);
        }
      });
    },
    // 团队人员的增删 start
  },
  created() {
    this.team = this.$store.state.peopleMessageList.team;
    this.college = this.$store.state.peopleMessageList.project.college;
    this.type = this.$store.state.peopleMessageList.project.type;
  },
  updated() {
    this.$store.commit("teamChange", this.team);
  },
  watch: {
    team: {
      handler: function (newVal, oldVal) {
        const map = new Map();
        let max = 0;
        this.team.forEach((item) => {
          if (item.xueli === "研究生") {
            this.$store.state.peopleMessageList.type = "研究生";
          }
          map.set(
            item.college,
            map.get(item.college) ? map.get(item.college) + 1 : 1
          );
        });
        // console.log(map);
        map.forEach((item, index) => {
          // console.log(index, item);
          if (item > max && index !== "") {
            max = item;
            this.college = index;
          }
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}
.iconfont {
  position: absolute;
  margin-top: 0.12rem;
  font-size: 0.12rem;
  // color: red;
}
.team {
  margin: 0.4rem 0.8rem 0.4rem 3rem;
  // border: 0.01rem solid #bbbbbb;
  &__title {
    position: relative;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 0.2rem;
  }
  &__college {
    position: absolute;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 1.3rem;
    margin-top: -0.5rem;
    font-size: 0.16rem;
    &__input {
      position: absolute;
      width: 2.6rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-left: 2.1rem;
      margin-top: -0.5rem;
      font-size: 0.18rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &__type {
    position: absolute;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 4.8rem;
    margin-top: -0.5rem;
    font-size: 0.16rem;
    &__input {
      position: absolute;
      width: 1.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-left: 5.6rem;
      margin-top: -0.5rem;
      font-size: 0.18rem;
    }
  }
  &__box {
    overflow-y: scroll;
    width: 10rem;
    height: 4rem;
    margin-top: 0.65rem;
    // border: 0.01rem solid #bbbbbb;
  }
  &__box__title {
    position: absolute;
    font-size: 0.2rem;
    font-weight: bolder;
    margin: 0.15rem 0 0.2rem 0.09rem;
  }
  &__member {
    position: relative;
    width: 6rem;
    height: 1.46rem;
    line-height: 0.8rem;
    margin: 0 0 0.3rem 0;
    border: 0.01rem solid #bbbbbb;
    cursor: default;
    &__name {
      position: absolute;
      top: 0.21rem;
      left: 1rem;
      font-size: 0.17rem;
      width: 2rem;
      height: 0.35rem;
      line-height: 0.35rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 0.01rem solid #bbbbbb;
    }
    &__college {
      position: absolute;
      top: 0.55rem;
      left: 1rem;
      width: 2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 0.01rem solid #bbbbbb;
    }
    &__xueli {
      position: absolute;
      top: 0.78rem;
      left: 1rem;
      width: 2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 0.01rem solid #bbbbbb;
    }
    &__project {
      position: absolute;
      top: 1.02rem;
      left: 1rem;
      width: 2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 0.01rem solid #bbbbbb;
    }
    &__number {
      position: absolute;
      top: 0.5rem;
      left: 3.8rem;
      width: 1.8rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &__phone {
      position: absolute;
      top: 0.9rem;
      left: 3.8rem;
      width: 1.83rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &__job {
    position: absolute;
    top: 0.6rem;
    right: -1.5rem;
    width: 1rem;
    height: 4rem;
    line-height: 0.25rem;
    font-size: 0.25rem;
    color: #95a5a6;
    overflow-y: scroll;
    // border: 0.01rem solid #bbbbbb;
    &__every {
      position: relative;
      margin: 0 0 1.6rem 0;
    }
  }
  &__addMember {
    position: relative;
    top: 0.22rem;
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
  &__imgPeople {
    position: absolute;
    font-size: 0.6rem;
    // top: 0.1rem;
    left: 0.22rem;
  }
  &__imgCopy {
    position: absolute;
    margin-top: -0.01rem;
    right: 0.08rem;
    font-size: 0.18rem;
    cursor: pointer;
    height: 0.35rem;
    line-height: 0.35rem;
  }
  &__imgDelete {
    position: absolute;
    bottom: 0;
    right: 0.08rem;
    font-size: 0.18rem;
    cursor: pointer;
    height: 0.35rem;
    line-height: 0.35rem;
  }
}
.maskItem {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  &__frame {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    width: 7.5rem;
    height: 4rem;
    border-radius: 0.14rem;
  }
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
