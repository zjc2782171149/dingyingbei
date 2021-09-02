import { createStore } from 'vuex'

export default createStore({
  state: {
    peopleMessageList: {
      project: {
        teamName: '',
        productionName: '',
        productionType: {
          typeOne: '',
          typeTwo: ''
        },
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
      // console.log('index now is ', payload);
    },
    teamChange(state, payload) {
      state.peopleMessageList.team = payload;
      // console.log(payload);
    },
    maskChange(state, payload) {
      state.peopleMessageList.team[state.indexForMask] = payload;
      // console.log(payload);
      // console.log(state.indexForMask, '的数据更改为', state.peopleMessageList.team[state.indexForMask]);
      // console.log(state.peopleMessageList.team);
    }
  },
  actions: {
  },
  modules: {
  }
})
