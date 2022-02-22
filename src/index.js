module.exports = function toReadable (number) {
    numberArray = String(number).split('');
    resultString = '';
    nineArray = [
      {1: 'one'},
      {2: 'two'},
      {3: 'three'},
      {4: 'four'},
      {5: 'five'},
      {6: 'six'},
      {7: 'seven'},
      {8: 'eight'},
      {9: 'nine'}
    ];
  
    teenArray = [
      {10: 'ten'},
      {11: 'eleven'},
      {12: 'twelve'},
      {13: 'thirteen'},
      {14: 'fourteen'},
      {15: 'fifteen'},
      {16: 'sixteen'},
      {17: 'seventeen'},
      {18: 'eighteen'},
      {19: 'nineteen'}
    ];
  
    tyArray = [
      {2: 'twenty'},
      {3: 'thirty'},
      {4: 'forty'},
      {5: 'fifty'},
      {6: 'sixty'},
      {7: 'seventy'},
      {8: 'eighty'},
      {9: 'ninety'}
    ];
  
    if (number === 0) {
        return 'zero';
      };

    if (number > 99) {
      toHundred();
      let hundred = numberArray[0] * 100;
      number = number - hundred;
    };
  
    if (number < 10) {
      toNine(number);
    };
  
    if (9 < number && number < 20) {
      toTeen(number);
    };
  
     if (19 < number && number < 100) {
      toTy(number);
    };
    
    return resultString.slice(0,-1);
  }
  
  function toHundred() {
      nineArray.forEach(function(item) {
        if (numberArray[0] === String(Object.keys(item))) {
          resultString += String(Object.values(item)) + ' hundred ';
        }
      });
  }
  
  function toNine(number) {
    nineArray.forEach(function(item) {
        if (String(number) === String(Object.keys(item))) {
          resultString += String(Object.values(item)) + ' ';
        }
      });
  }
  
  function toTeen(number) {
      teenArray.forEach(function(item) {
        if (String(number) === String(Object.keys(item))) {
          resultString += String(Object.values(item)) + ' ';
        }
      });
  }
  
  function toTy(number) {
    let tyNumArray = String(number).split('');
    tyArray.forEach(function(item) {
        if (tyNumArray[0] === String(Object.keys(item))) {
          resultString += String(Object.values(item)) + ' ';
        }
      });
    toNine(tyNumArray[1]);
  }
