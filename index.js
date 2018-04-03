// Code your solution in this file
function findMatching(list, name)
//'drivers' array   'string'
//takes array and string, returns matching list of drivers, case insensitive
{
  return list.filter(function (dname)
    {
      return dname.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(list, name)
//name property matches string argument
{
return list.filter(function (driver)
{
  return driver.name.toLowerCase() === name.toLowerCase();
});
}
