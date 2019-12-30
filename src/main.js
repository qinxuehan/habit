// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { setToken } from '@/utils/auth'
import weui from 'weui.js'
import 'weui'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
Vue.use(ElementUI)

Vue.prototype.$weui = weui
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to',to)
  store.dispatch('readyConfig',to.path)
  /* 路由发生变化修改页面title */
  setToken('footerType', to.meta.footerType)
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
