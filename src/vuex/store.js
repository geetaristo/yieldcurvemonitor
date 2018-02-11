import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  treasurydata: 'empty data' // {oneYear: ['test data']}
}

const mutations = {
  ADD_TREASURY_DATA (state, treasurydata) {
    state.treasurydata = treasurydata
  }
}

export default new Vuex.Store({
  state,
  mutations
})
