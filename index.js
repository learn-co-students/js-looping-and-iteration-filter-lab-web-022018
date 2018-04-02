// Code your solution in this file
function findMatching(array, name){
  return array.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}
function fuzzyMatch (array, letters) {
  let length = letters.length;
  return array.filter(function (driver) {
    return driver.slice(0, length) === letters;
  });
}
function matchName (array, name) {
  return array.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
