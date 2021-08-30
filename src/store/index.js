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
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
