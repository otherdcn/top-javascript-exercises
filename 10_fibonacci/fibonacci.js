const fibonacci = function(nth) {
  let a = 0
	let b = 1
	let sum = 0
  let fiboSeq = [];
  nth = Number(nth);
	
  if (nth === 0) return 0;
  if (nth < 0) return "OOPS";
  
  for (let i = 0; i < nth; i++) {
    sum = a + b;
    a = b;
    b = sum;
    fiboSeq.push(a);
  }
  
  console.log(fiboSeq);
  
  return fiboSeq[(nth-1)];
};

// Do not edit below this line
module.exports = fibonacci;
