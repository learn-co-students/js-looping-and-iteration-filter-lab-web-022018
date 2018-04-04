// Code your solution in this file
function findMatching(drivers,string){
  let newArray = []
  for (const driver of drivers){
    if (driver.toLowerCase() === string.toLowerCase()){
      newArray.push(driver)
    }}
  return newArray
}
function fuzzyMatch(drivers, string){
  let newArray = []
  let stringlength = string.length
  for (const driver of drivers){
    if (string === driver.substring(0,stringlength)){
      newArray.push(driver)
    }
  }
  return newArray
}
function matchName(drivers,string){
  let newArray = []
  for (const driver of drivers){
    if (string === driver['name']){
      let newObj = {}
      console.log(driver)
      newObj['name'] = driver['name']
      newObj['hometown'] = driver['hometown']
      newArray.push(newObj)
    }
  }
  return newArray
}
