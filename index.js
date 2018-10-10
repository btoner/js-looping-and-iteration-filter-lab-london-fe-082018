// Code your solution in this file
function findMatching(drivers, driverLowerCase){
  return drivers.filter(name => driverLowerCase.toLowerCase() == name.toLowerCase())
}
  
function fuzzyMatch(drivers, driverMatch){
  return drivers.filter(name => driverMatch.startsWith(driverMatch) == name.startsWith(driverMatch))
 // return drivers.filter(name => driverMatch.substring(drivers.length % 2) == name.endsWith('y'))
}

//function matchName(drivers, driverMatch){
//  return drivers.filter()
//}