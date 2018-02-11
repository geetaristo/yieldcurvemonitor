// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import store from './vuex/store'
import Vuex from 'vuex'
import router from './router'
import App from './App'

Vue.use(Vuex)

const state = {
  treasurydata: 'empty data' // {oneYear: ['test data']}
}

const mutations = {
  ADD_TREASURY_DATA (state, treasurydata) {
    state.treasurydata = treasurydata
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
