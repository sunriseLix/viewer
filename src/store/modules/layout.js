import * as types from '../mutation-types'

// initial state
const state = {
  layoutSeries: '11',
  layoutImage: '11'
}

// getters
const getters = {
  getLayoutSeries: state => state.layoutSeries,
  getLayoutImage: state => state.layoutImage
}

// mutations
const mutations = {
  [types.SAVE_LAYOUT_SERIES] (state, playload) {
    state.layoutSeries = playload
  },
  [types.SAVE_LAYOUT_IMAGE] (state, playload) {
    state.layoutImage = playload
  }
}

export default {
  state,
  getters,
  mutations
}
