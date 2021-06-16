// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

import './mock/mockServer'   //加载mockServer即可

Vue.config.productionTip = false

Vue.component(Button.name,Button)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router,
  store
})
