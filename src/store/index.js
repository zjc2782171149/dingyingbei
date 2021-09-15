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
        college: '',
        type: '',
        teacheriD: '',
        TeamId: '',
        fileLists: [],
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
    flag: 1,
    other: '',
  },
  mutations: {
    changeIndex(state, payload) {
      state.indexForMask = payload;
    },
    teamChange(state, payload) {
      console.log(payload);
      state.peopleMessageList.team = payload.team;
      state.peopleMessageList.project.type = payload.type;
      state.peopleMessageList.project.college = payload.college;
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
