const palindromes = function (str) {
  const unwantedChars = [" ",".",",","-",";",":","!","?"];
  const arr = str.toLowerCase().split("");

  const cleanArr = arr.filter((ele) => {
    return !(unwantedChars.includes(ele));
  });

  const straightStr = cleanArr.join('');
  const reverseStr = cleanArr.reverse().join('');

  return straightStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
