// Code your solution in this file
function findMatching(arrayOfDrivers, match) {
  return arrayOfDrivers.filter(function (driver) {return driver.toLowerCase() === match.toLowerCase()})
}

function fuzzyMatch(arrayOfDrivers, match) {
  return arrayOfDrivers.filter(function (driver) {return driver[0].toLowerCase() === match[0].toLowerCase()})
}

function matchName(arrayOfDrivers, match) {
  return arrayOfDrivers.filter(function (driver) {return driver.name.toLowerCase() === match.toLowerCase()})
}
