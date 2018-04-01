function findMatching(drivers, string) {
  return drivers.filter(function(name){return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) { return name.slice(0, string.length).toLowerCase() === string.toLowerCase()})
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})
}
