// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (arr, partialName) {
  let lengthOfName = partialName.length;
  return arr.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (arr, name) {
  return arr.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
