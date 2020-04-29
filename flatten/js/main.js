/*
 * Challenge: 19-flatten
 * Difficulty:  Intermediate
 * Prompt:
 * - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
 * - A flattened array is an array that contains no nested arrays.
 * - Arrays maybe nested at any level.
 * - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
 * - The values in the new array should maintain their ordering as shown in the examples below.
 * Hint:
 * - This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
 * Examples:
 * flatten( [1, [2, 3]] );
 * => [1, 2, 3]  (a new array) 
 * flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
 * => [1, 2, 3, 4, 1, 'a', 'b', 'c']
 */

// Function called flatten arr as input
// arr may contain multiple nested arrays
// make the array flat so it contains no nested arrays, retaining it's order
// recursion?

function flatten(arr) {
  newArray = []
  // Base case: No arrays in our array
  arr.forEach((element) => {
    if (!Array.isArray(element)) {
      newArray.push(element)
    } else {
      // Action: Flatten the array
      element.forEach((item) => {
        newArray.push(item)
      })
      return flatten(newArray)
    }
  })
  return newArray
}

let iterationOne = flatten( [1, [2, 3]] )
let iterationTwo = flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] )

console.log(iterationOne)
console.log("^^ solution to [1, [2, 3]]")
console.log(iterationTwo)
console.log("^^ solution to 1, [2, [3, [4]]], 1, 'a', ['b', 'c']]")