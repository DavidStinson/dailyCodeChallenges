/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/* Lyft
Write an algorithm which accepts an array of integers. Each integer represents the height of a bar in a bar graph. Your algorithm should calculate how much "water" could be stored in the bar graph. (Quick reference I googled, seems like this problem: https://www.geeksforgeeks.org/trapping-rain-water/)
*/

function findWater(arr) {
  let total = 0;
  let highest = 0;
  let nextHighest = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= highest) {
      highest = arr[i];
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] > nextHighest) {
          nextHighest = arr[j];
        }
      }
      console.log(`Next highest = ${nextHighest}, Highest = ${highest}`);
      if (highest > nextHighest) {
        highest = nextHighest;
      }
    }
    if (arr[i] < highest) {
      total += highest - arr[i];
    }
    nextHighest = 0;
  }
  return total;
}

let iterationOne = findWater([0, 10, 12, 6, 8, 4, 0, 0, 3, 0, 4]);
console.log(
  `The result of the first iteration of the water problem was ${iterationOne}. The correct answer is 15.`
);

let iterationTwo = findWater([1, 1, 2, 1, 2, 3, 0, 1, 0, 3]);
console.log(
  `The result of the first iteration of the water problem was ${iterationTwo}. The correct answer is 9.`
);

let iterationThree = findWater([3, 0, 3]);
console.log(
  `The result of the third iteration of the water problem was ${iterationThree}. The correct answer is 3.`
);

let iterationFour = findWater([1, 4, 8, 3, 4, 6, 2]);
console.log(
  `The result of the third iteration of the water problem was ${iterationFour}. The correct answer is 3.`
);

let iterationFive = findWater([3, 3, 3, 3]);
console.log(
  `The result of the third iteration of the water problem was ${iterationFive}. The correct answer is 0.`
);

let iterationSix = findWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(
  `The result of the third iteration of the water problem was ${iterationSix}. The correct answer is 6.`
);
