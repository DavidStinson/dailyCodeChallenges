/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

//Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function (roman) {
  value = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  answer = 0;
  for (let i = 0; i < roman.length - 1; i++) {
    previous = 0;
    // If greater than or equal to previous,
    // add to answer
    if (value[roman[i]] >= previous) {
      answer += value[roman[i]];
      // if smaller subtract
    } else {
      answer -= value[roman[i]];
    }
    // update previous
    previous = value[roman[i]];
  }
  return answer;
};

console.log(romanToInt("III"), "should be 3");
console.log(romanToInt("IV"), "should be 4");
console.log(romanToInt("IX"), "should be 9");
console.log(romanToInt("LVIII"), "should be 58");
console.log(romanToInt("MCMXCIV"), "should be 1994");
