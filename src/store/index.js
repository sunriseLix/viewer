import Vue from 'vue'
import Vuex from 'vuex'

// 模块
import operate from './modules/operate'
import layout from './modules/layout'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    operate,
    layout
  },
  strict: true
})

export default store
