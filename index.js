// Code your solution in this file

function findMatching(array,name){
  return array.filter(function(elm){return elm.toLowerCase() === name.toLowerCase()})
}
// findMatching- This function takes an array of drivers and a string as arguments,
//   and returns the matching list of drivers. The function should be case insensitive.
function fuzzyMatch(array,string){
  return array.filter(function(elm){ return elm.slice(0,string.length)===string})
}

// fuzzyMatch - This function takes an array of drivers and a string as arguments
//   for querying the array, and
//   returns all drivers whose names begin with the provided letters.
function matchName(array,string){
  return array.filter (function(elm){ return elm.name === string})
}

// matchName - This function takes an array of drivers and a string as arguments.
//   In this function, each element of the drivers array is a JavaScript object
//    that has a property of name. The function should
//    return each element whose name property matches the provided string argument.
