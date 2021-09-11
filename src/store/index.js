import { createStore } from 'vuex'

export default createStore({
  state: {
    // 参赛队伍报名信息
    peopleMessageList: {
      admin: '',
      project: {
        id: '',
        teamName: '',
        workName: '',
        direction: '',
        ground: '',
        college: '数学',
        type: '本科生',
        teacheriD: '',
        TeamId: '',
        fileLists: {
          file1: '',
          file2: ''
        }
      },
      team: [
        {
          id: '',
          name: '',
          job: '',
          college: '',
          xueli: '',
          project: '',
          studentId: '',
          phone: ''
        }
      ],
      teacher: {
        id: '',
        name: '',
        college: '',
        job: '',
        phone: ''
      }
    },
    indexForMask: -1,
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
