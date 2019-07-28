const book = {
    state: {
        fileName: '',
        menuVisible: false,
        settingVisible: -1, // default: -1: 不显示, 0: 字号, 1: 主题, 2: 进度条 , 3: 字体
        defaultFontSize: 12
      },
      mutations: {
        'SET_FILENAME': (state, fileName) => {
          state.fileName = fileName
        },
        'SET_MENUVISIBLE': (state, menuVisible) => {
          state.menuVisible = menuVisible
        },
        'SET_SETTINGVISIBLE': (state, settingVisible) => {
          state.settingVisible = settingVisible
        },
        'SET_DEFAULTFONTSIZE': (state, defaultFontSize) => {
          state.defaultFontSize = defaultFontSize
        }
      },
      actions: {
        // 存放于actions.js中
        // setFileName: ({ commit, state }, fileName) => {
        //   console.log(state.fileName, fileName)
        //   commit('SET_FILENAME', fileName)
        // },
        // setMenuVisible: ({ commit, state }, menuVisible) => {
        //   console.log(state.menuVisible, menuVisible)
        //   commit('SET_MENUVISIBLE', menuVisible)
        // }
      }
}
export default book
