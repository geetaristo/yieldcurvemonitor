import getTreasuryYield from 'usTreasuryBondYeildParser.js'

/*
export const addTreasuryData = ({ dispatch }, treasuryData) => {
  dispatch('ADD_NOTE', treasuryData)
}
*/

export const fetchTreasuryData = async({commit}) {
  const entries = await getTresuryYield('2018')
  commit('ADD_TREASURY_DATA', entries)
}

