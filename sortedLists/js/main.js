/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

let arr1 = [-5, 3, 6, 12, 15];
let arr2 = [-12, -10, -6, -3, 4, 10];

let arr3 = [-5, 3, 6, 15];
let arr4 = [-12, -10, -6, -3, 4, 10];

function findMedianOfTwoArrays(arrA, arrB) {
  arrC = []
  while (arrA.length || arrB.length) {
    if (arrA[0] > arrB[0]) {
      arrC.push(arrB.shift());
    } else {
      arrC.push(arrA.shift());
    }
  }

  if (arrC.length % 2) {
    // If not even
    return arrC[Math.floor(arrC.length / 2)];
  } else {
    // if even
    return (arrC[arrC.length / 2] + arrC[arrC.length / 2 - 1])/2
  }
}

console.log(findMedianOfTwoArrays(arr1, arr2))
console.log(findMedianOfTwoArrays(arr3, arr4))