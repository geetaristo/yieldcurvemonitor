import getTreasuryYield from 'usTreasuryBondYeildParser.js'

export const fetchTreasuryData = async ({commit}) => {
  const entries = await getTresuryYield('2018')
  commit('ADD_TREASURY_DATA', entries)
}

export const changeTreasuryDataYear = ({commit}, year) => {

  const entries = await getTresuryYield(year)
  commit('ADD_TREASURY_DATA', entries)
}
