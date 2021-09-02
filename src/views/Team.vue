<template>
  <div class="team">
    <h2 class="team__title">团队信息</h2>
    <div class="team__box">
      <div class="team__member" v-for="(item, index) in team" :key="item.name">
        <div class="iconfont team__imgPeople">&#xe601;</div>

        <div class="team__member__name">姓名：{{ item.name }}</div>
        <!-- <div class="team__member__job">{{ item.job }}</div> -->

        <div class="team__member__college">学院：{{ item.college }}</div>

        <div class="team__member__xueli">学历：{{ item.xueli }}</div>

        <div class="team__member__project">专业：{{ item.project }}</div>
        <div class="team__member__number">学号：{{ item.number }}</div>
        <div class="team__member__phone">联系方式：{{ item.phone }}</div>
        <div class="iconfont team__imgCopy" @click="openMaskShow">&#xe604;</div>
        <div class="iconfont team__imgDelete" @click="deleteMember(index)">
          &#xe732;
        </div>
        <div class="maskItem" v-show="addShow">
          <div class="maskItem__frame">
            <Mask @cancelMask="closeMask" :team="item" :index="index" />
          </div>
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
import Mask from "./Mask.vue";

export default {
  name: "Team",
  components: {
    Mask,
  },
  data() {
    return {
      addShow: true,
      team: [],
    };
  },
  methods: {
    // 蒙层的展示 start
    openMaskShow() {
      this.addShow = !this.addShow;
      // console.log(this.$store.state);
    },
    closeMask(data) {
      this.addShow = false;
      // console.log(data);
    },
    // 蒙层的展示 end
    // 团队人员的增删 start
    addTeamMember() {
      this.team.push({
        name: "姓名221112",
        job: "职称",
        college: "学院",
        xueli: "学历",
        project: "专业",
        number: "",
        phone: "",
      });
      // console.log();
    },
    deleteMember(indexMember) {
      this.team.forEach((item, index) => {
        if (index === indexMember) {
          this.team.splice(index, 1);
        }
      });
    },
    // 团队人员的增删 end
    // changeVuex() {
    //   console.log("success");
    // },
  },
  mounted() {
    this.openMaskShow();
    // console.log(this.$store.state.peopleMessageList.team);
  },
  updated() {
    // console.log("fsfsf");
    this.$store.state.peopleMessageList.team = this.team;
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
  &__title {
    position: relative;
    width: 1.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
  }
  &__box {
    overflow-y: scroll;
    width: 10rem;
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
      top: 0.21rem;
      left: 1rem;
      font-size: 0.17rem;
      width: 2rem;
      height: 0.35rem;
      line-height: 0.35rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 1px solid #bbbbbb;
    }
    &__job {
      position: absolute;
      top: 0.28rem;
      left: 1.73rem;
      width: 2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // border: 1px solid #bbbbbb;
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
      // border: 1px solid #bbbbbb;
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
      // border: 1px solid #bbbbbb;
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
      // border: 1px solid #bbbbbb;
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
