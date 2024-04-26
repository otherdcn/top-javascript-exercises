const add = function(a,b) {
  return 	a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total,next) =>  total += next, 0);	
};

const multiply = function(array) {
  return array.reduce((total,next) => total * next)
};

const power = function(base,power) {
  return base ** power;	
};

const factorial = function(n) {
	let product = n;

  if (product === 0) return 1;
  for (let i = 1; i < n; i++) product *= (n-i);
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
