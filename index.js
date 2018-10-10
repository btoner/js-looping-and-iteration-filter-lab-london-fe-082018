// Code your solution in this file
function findMatching(drivers, driver){
  return drivers.filter(name => driver.toLowerCase() == name.toLowerCase())
  
}