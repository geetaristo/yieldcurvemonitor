import getTreasuryYield from '../api/usTreasuryBondYeildParser'

export const fetchTreasuryData = async ({commit}) => {
  const entries = await getTreasuryYield('2018')
  commit('ADD_TREASURY_DATA', entries)
}

export const changeTreasuryDataYear = async ({commit}, year) => {
  const entries = await getTreasuryYield(year)
  commit('ADD_TREASURY_DATA', entries)
}
