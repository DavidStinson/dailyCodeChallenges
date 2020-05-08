/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Nums may not be in order

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(numArr, sumOfTwoNumbers){
  for (let i = 0; i < numArr.length; i++) {
    numToFind = sumOfTwoNumbers - numArr[i]
    secondIndex = numArr.indexOf(numToFind, i + 1)
    if (secondIndex !== -1) {
      return [i, secondIndex]
    }
  }
}

iteration1 = twoSum([2,7,11,15], 9)
console.log(iteration1, "should be [0,1]")

iteration2 = twoSum([3,2,3],6)
console.log(iteration2, "should be [0,2]")