// Code your solution in this file
function findMatching(collection, string){
let newArray = []
  for (const el in collection){
    if (collection[el].toLowerCase()=== string.toLowerCase()){

    newArray.push(collection[el])
  }
}
return newArray
}

function fuzzyMatch(collection, string){
let newArray = []
for (const el in collection){
    if (collection[el].startsWith(string)){
      newArray.push(collection[el])
    }
  }
  return newArray
}

function matchName(collection, string){
let newArray = []
for (const el in collection){
  if (collection[el]['name'] === string){
  newArray.push(collection[el])
  }
}
return newArray

}
//
//
//
//
//
