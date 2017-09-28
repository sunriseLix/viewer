import * as types from '../mutation-types'

// initial state
const state = {
  operate: {
    text: '默认',
    id: 1
  }
}

// getters
const getters = {
  getOperate: state => state.operate
}

// mutations
const mutations = {
  [types.SAVE_OPERATE] (state, playload) {
    state.operate = playload
  }
}

export default {
  state,
  getters,
  mutations
}
