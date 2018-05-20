/**
 * Import Global Style (.css/.scss)
 */
import 'element-ui/lib/theme-chalk/index.css' // Theme UI
import './assets/scss/index.scss' // Customize UI

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import head from 'vue-head'
import { sync } from 'vuex-router-sync'
import i18n from './locales'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(head)
Vue.use(ElementUI)
Vue.use(VeeValidate)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
