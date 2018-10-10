// Code your solution in this file
function findMatching(drivers, driverLowerCase){
  return drivers.filter(name => driverLowerCase.toLowerCase() == name.toLowerCase())
}
  
function fuzzyMatch(drivers, driverStartingSa){
  return drivers.filter(name => driverStartingSa.startsWith('Sa') == name.startsWith('Sa'))
}

function matchName(drivers, driverMatch){
  return drivers.filter()
}