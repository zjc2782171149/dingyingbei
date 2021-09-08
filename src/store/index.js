import { createStore } from 'vuex'

export default createStore({
  state: {
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
    indexForMask: -1
  },
  mutations: {
    changeIndex(state, payload) {
      state.indexForMask = payload;
    },
    teamChange(state, payload) {
      state.peopleMessageList.team = payload;
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
