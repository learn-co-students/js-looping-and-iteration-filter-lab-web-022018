// Code your solution in this file


// Code your solution in this file


function findMatching(the_arr, thing_to_be_looked_for){
  return the_arr.filter(function(each_item){
    return each_item.toLowerCase() == thing_to_be_looked_for.toLowerCase()
  })
}

function fuzzyMatch(list, partialName){
 let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(drivers, name_to_look_for){
  return drivers.filter(function(each_object_in_drivers){
     return each_object_in_drivers.name == name_to_look_for
  });
}