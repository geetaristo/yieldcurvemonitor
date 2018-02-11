// const http = require('http'),
//       moment = require('moment')

// const { parseString } = require('xml2js')

import http from 'http'
import moment from 'moment'
import { parseString } from 'xml2js'


const treasuryYieldDataPath = 'http://data.treasury.gov/feed.svc/DailyTreasuryYieldCurveRateData?$filter=year(NEW_DATE)%20eq%202018'

function getYieldCurve(year, callback) { 
  const chunks = []

  console.log('retrieving US Treasury yield data: ', treasuryYieldDataPath)

  http.get(treasuryYieldDataPath, (resp) => {

    resp.on('data', chunk => chunks.push(chunk))
 
    // The whole response has been received. Print out the result.
    resp.on('end', () => callback(chunks.join('') ) )

  }).on("error", err => {
    console.log("Error: " + err.message);
  })
}

function parseYieldEntry(entry) {

  const entryDate = moment(entry.content[0]["m:properties"][0]["d:NEW_DATE"][0]["_"]).toDate()
  const oneMonth = entry.content[0]["m:properties"][0]["d:BC_1MONTH"][0]["_"]
  const threeMonth = entry.content[0]["m:properties"][0]["d:BC_3MONTH"][0]["_"]
  const sixMonth = entry.content[0]["m:properties"][0]["d:BC_6MONTH"][0]["_"]
  const oneYear = entry.content[0]["m:properties"][0]["d:BC_1YEAR"][0]["_"]
  const twoYear = entry.content[0]["m:properties"][0]["d:BC_2YEAR"][0]["_"]
  const threeYear = entry.content[0]["m:properties"][0]["d:BC_3YEAR"][0]["_"]
  const fiveYear = entry.content[0]["m:properties"][0]["d:BC_5YEAR"][0]["_"]
  const sevenYear = entry.content[0]["m:properties"][0]["d:BC_7YEAR"][0]["_"]
  const tenYear = entry.content[0]["m:properties"][0]["d:BC_10YEAR"][0]["_"]
  const twentyYear = entry.content[0]["m:properties"][0]["d:BC_20YEAR"][0]["_"]
  const thirtyYear = entry.content[0]["m:properties"][0]["d:BC_30YEAR"][0]["_"]

  return {
    entryDate,
    oneMonth,
    threeMonth,
    sixMonth,
    oneYear,
    twoYear,
    threeYear,
    fiveYear,
    sevenYear,
    tenYear,
    twentyYear,
    thirtyYear
  }

}



const getYieldEntries = (year) => {

  return new Promise(function(resolve) {
    getYieldCurve(year, body => {
      parseString(body, (err, result) => {
        const entries = result.feed.entry.map(parseYieldEntry)
  
        console.log('number of entries', entries.length)
        console.log(entries.sort((a, b) => a.entryDate > b.entryDate))
        resolve(entries)
      })
    })
  })

}

export default getYieldEntries