const actions = {
    setFileName: ({ commit, state }, fileName) => {
        console.log(state.fileName, fileName)
        commit('SET_FILENAME', fileName)
    },
    setMenuVisible: ({ commit, state }, menuVisible) => {
        console.log(state.menuVisible, menuVisible)
        commit('SET_MENUVISIBLE', menuVisible)
    },
    setSettingVisible: ({ commit, state }, settingVisible) => {
        console.log(state.settingVisible, settingVisible)
        commit('SET_SETTINGVISIBLE', settingVisible)
    },
    setDefaultFontSize: ({ commit, state }, defaultFontSize) => {
        console.log(state.defaultFontSize, defaultFontSize)
        commit('SET_DEFAULTFONTSIZE', defaultFontSize)
    }
}
export default actions
