// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(word){
    return word.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string){
  let lengthOfName = string.length
  return drivers.filter(function(letters){
    return letters.slice(0,lengthOfName) === string
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
