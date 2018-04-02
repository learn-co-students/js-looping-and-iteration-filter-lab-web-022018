// Code your solution in this file
function findMatching(collection, string){
  const newCollection = [];
  for (const element of collection) {
    if (element.toLowerCase() === string.toLowerCase()) {
      newCollection.push(element);
    }
  }
  return newCollection;
}

function fuzzyMatch(collection, string){
  const newCollection = [];
  for (const element of collection) {
    if (element[0].toLowerCase() === string[0].toLowerCase()) {
      newCollection.push(element);
    }
  }
  return newCollection;
}

function matchName(collection, string){
  const newCollection = [];
  for (const element of collection) {
    if (element.name === string) {
      newCollection.push(element);
    }
  }
  return newCollection;
}
