import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['@/pages/main'], resolve),
      children: [
        { path: '', redirect: 'reader' },
        {
          name: 'reader',
          path: 'reader',
          component: resolve => require(['@/pages/reader'], resolve)
        }
      ]
    }
  ]
})
