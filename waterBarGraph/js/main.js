function logPairs(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      for (let k = 0; k < 100000; k++) {
        console.log("i: ", arrA[i], "j: ", arrB[j])
      }
    }
  }
}

function sumAndProductOfArray(arr) {
  let sum = 0
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  arr.forEach(element => {
    product *= element
  })
  console.log(`Sum: ${sum}`)
  console.log(`Product: ${product}`)
}




function fibonacci(n) {
  return n <= 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(25));




logTwoArrays(["A", "B", "C", "D"], [1, 2, 3, 4]);

function logTwoArrays(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    console.log(arrA[i]);
    for (let j = 0; j < arrA.length; j++) {
      console.log(arrA[j]);
    }
  }
  for (let j = 0; j < arrA.length; j++) {
    console.log(arrA[j]);
  }
}

let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
let arr = [10, 4, 2, 7, 9];

arr.forEach((num) => {
  if (num < min) min = num;
  if (num > max) max = num;
});

logArray([1, 2, 3, 4, 5]);

function logArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log("i: ", arr[i], "j: ", arr[j]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

log(8);
function log(n) {
  let j = 1;
  for (let k = 0; k < n; k++) {
    for (let i = n; i > 0.999; i /= 2) {
      let result = i;
      console.log(`The result of iteration ${j} is ${result}`);
      j++;
    }
  }
}

// Creates this array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
tinyArray = Array.from(Array(10).keys());
// Creates a very large array starting with: [0, 1, 2, 3 ...]
largeArray = Array.from(Array(100000000).keys());

findRandomNumberInArray(tinyArray);
findRandomNumberInArray(largeArray);

function findRandomNumberInArray(arr) {
  randomNum = Math.floor(Math.random() * arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (randomNum === arr[i]) return arr[i];
  }
}

/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/* Lyft
Write an algorithm which accepts an array of integers. Each integer represents the height of a bar in a bar graph. Your algorithm should calculate how much "water" could be stored in the bar graph. (Quick reference I googled, seems like this problem: https://www.geeksforgeeks.org/trapping-rain-water/)
*/

// Alan did this!

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
