import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { 
  treasuryData: {}

}

const mutations = { 
  ADD_TREASURY_DATA (state, treasuryData) {
    state.treasuryData = treasuryData;
  }  
}

export default new Vuex.Store({
  state,
  mutations
})
