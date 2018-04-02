function findMatching (names, string) {
  return names.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch (names, string) {
  return names.filter(name => name.slice(0, string.length) === string);
}

function matchName (drivers, string) {
  return drivers.filter(driver => driver['name'] === string);
}
