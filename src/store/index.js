import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/index'
import register from './modules/register/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    register
  }
})
