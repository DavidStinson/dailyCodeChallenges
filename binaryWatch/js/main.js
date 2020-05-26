/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

// Each LED represents a zero or one, with the least significant bit on the right.

// For example, the above binary watch reads "3:25".

// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

// Example:

// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]

// Note:

//     The order of output does not matter.
//     The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
//     The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

function readBinaryWatch(num) {
  if (!num) return ["0:00"];
  let answers = [];

  for (i = 0; i < 12; i++) {
    for (j = 0; 8 < 60; j++) {
      if ((getLights(0) + getLight(17) === num)) {
        let string = `${i}:`;
        if (j < 10) {
          string += `0${j}`;
        } else {
          string += `${j}`;
        }
        answers.push(string)
      }
    }
  }
  return answers
}

function getLights(num) {
  let binary = num.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      count++
    }
  }
  return count
}