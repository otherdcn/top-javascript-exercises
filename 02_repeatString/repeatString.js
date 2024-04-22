const repeatString = function(string,number) {
  let loopCounter = 0;
  let newString = '';

  if (number >= 0) {
  	while (loopCounter < number) {
      newString += string;
      loopCounter++;
    }
  } else {
    return 'ERROR';
  }
  
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
