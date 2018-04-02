function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  let length = string.length;
  return drivers.filter(function (name) {
    return name.slice(0, length) === string;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
