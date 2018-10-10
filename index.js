// Code your solution in this file
function findMatching(drivers, driverLowerCase){
  return drivers.filter(name => driverLowerCase.toLowerCase() == name.toLowerCase())
}
  
function fuzzyMatch(drivers, driverMatch){
  return drivers.filter(name => driverMatch.startsWith('Sa') == name.startsWith('Sa'))
  return drivers.filter(name => driverMatch.substr()
}

//function matchName(drivers, driverMatch){
//  return drivers.filter()
//}