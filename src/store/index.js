import { createStore } from 'vuex'

export default createStore({
  state: {
    // 参赛队伍报名信息
    peopleMessageList: {
      name: '',
      project: {
        teamName: '',
        productionName: '',
        typeOne: '',
        typeTwo: '',
        fileLists: {
          file1: '',
          file2: ''
        }
      },
      team: [
        {
          name: '',
          job: '',
          college: '',
          xueli: '',
          project: '',
          number: '',
          phone: ''
        }
      ],
      teacher: {
        name: '',
        college: '',
        job: ''
      }
    },
    indexForMask: -1,
    // 用户登录信息
    playerMes: {
      player: {
        admin: "13794797345",
        password: "password", // 使用验证码登录时，这个参数为空
      },
      messageId: "7104267a-fd52-46ad-8005-3d91a0cce2b4", // 使用验证码登录时，携带 这两个参数
      cacheCode: "" // 使用验证码登录时，携带这两个参数
    }
  },
  mutations: {
    changeIndex(state, payload) {
      state.indexForMask = payload;
    },
    teamChange(state, payload) {
      state.peopleMessageList.team = payload;
    },
    loginChange(state, payload) {
      state.playerMes = payload.personMessage;
    },
    maskChange(state, payload) {
      state.peopleMessageList.team[state.indexForMask] = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
