// Code your solution in this file
function findMatching(collection, match) {
  return collection.filter(function (val) {return val.toLowerCase() == match.toLowerCase(); })
}

function fuzzyMatch(collection, match) {
  return collection.filter(function (val) {return val.startsWith(match); })
}

function matchName(collection, match) {
  return collection.filter(obj => obj["name"] === match)
}
