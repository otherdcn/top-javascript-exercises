const removeFromArray = function(array,...remove) {
  const newArray = array.filter((element) => !remove.includes(element));
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
