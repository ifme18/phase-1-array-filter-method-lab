const drivers = ['Alice', 'Bob', 'Charlie', 'alice'];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, 'alice'));


function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}

console.log(fuzzyMatch(drivers, 'A'));

function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

console.log (matchName(drivers,'Bob'))

 

