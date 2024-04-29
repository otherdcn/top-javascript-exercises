const findTheOldest = function(array) {
  const sortedByOldest = array.sort((firstPerson,lastPerson) => {
    const currentYear = (new Date()).getFullYear();
    if (firstPerson.yearOfDeath === undefined) firstPerson.yearOfDeath = currentYear;
    if (lastPerson.yearOfDeath === undefined) lastPerson.yearOfDeath = currentYear;
    
    firstPersonYears = (firstPerson.yearOfDeath - firstPerson.yearOfBirth);
    lastPersonYears = (lastPerson.yearOfDeath - lastPerson.yearOfBirth);
  
    if (firstPersonYears > lastPersonYears) {
      return -1;
    } else {
      return 1;
    }
  });
  
  return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
