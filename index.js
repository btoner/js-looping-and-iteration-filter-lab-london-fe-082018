// Code your solution in this file
function findMatching(drivers, driverLowerCase){
  return drivers.filter(name => driverLowerCase.toLowerCase() == name.toLowerCase())
}
  
function fuzzyMatch(drivers, driverStartingS){
  return drivers.filter(name => driverStartingS.startsWith(s) == name.startsWith(s))
}

function matchName(drivers, driverMatch){
  return drivers.filter()
}