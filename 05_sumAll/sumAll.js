const sumAll = function(firstNum,lastNum) {
  if ((firstNum < 0) || (lastNum < 0)) return 'ERROR';
  if ((typeof firstNum != 'number') || (typeof lastNum != 'number')) return 'ERROR';
  
  let diff = 0;
  let sum = 0;
  
	if (lastNum >= firstNum) {
    diff = lastNum - firstNum; 
    sum = firstNum;

  	for (i = firstNum; i <= diff; i++) {
    	sum += (firstNum+i);
  	}
  } else {
    diff = firstNum - lastNum;
    sum = lastNum;

  	for (i = lastNum; i <= diff; i++) {
    	sum += (lastNum+i);
  	}
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
