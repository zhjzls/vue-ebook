const book = {
    state: {
        fileName: ''
      },
      mutations: {
        'SET_FILENAME': (state, fileName) => {
          state.fileName = fileName
        }
      },
      actions: {
        setFileName: ({ commit, state }, fileName) => {
          console.log(state.fileName, fileName)
          commit('SET_FILENAME', fileName)
        }
      }
}
export default book
