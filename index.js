// Code your solution in this file
function findMatching(drivers, driverLowerCase){
  return drivers.filter(name => driverLowerCase.toLowerCase() == name.toLowerCase())
}
  
function fuzzyMatch(drivers, driverStartingSa){
  return drivers.filter(name => driverStartingSa.startsWith(sa) == name.startsWith(sa))
}

function matchName(drivers, driverMatch){
  return drivers.filter()
}