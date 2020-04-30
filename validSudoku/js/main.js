/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/




console.log(factorial(8))

function factorial(num){
  // This function returns the factorial of a given number.
  let sum = 1;
  function fact(num){
    if(num < 1) {
    return sum;
    }
    sum = sum * num;
    return fact(num-1);
  }
  return fact(num); 
}


// function isValidSudoku(board) {
//   let y = 0;
//   let x = 0;
//   let currentValue = board[x][y];
//   function checkRow(currentValue) {
//       while (y < 9) {
//           console.log("y = " + y)
//           for (let x = 1; x< 9; x++) {
//               console.log("x = " + x)
//               if (board[x][y] === currentValue) {
//                   return false;
//               }
//               else {
//                   y += 1;
//                   checkRow(currentValue);
//               }
//           }
//       return true;
//       }
//   }
//   function checkColumn(currentValue) {
//       currentValue = board[x][y];
//       for (let y = 1; y < 9; y++) {
//           if (board[x][y] === currentValue) {
//               return false;
//           }
//           else {
//               while (x < 7) {
//                   x += 1;
//                   checkColumn(currentValue)
//               }
//           }
//       }
//       return true;
//   }
//   if (checkRow(currentValue) && checkColumn(currentValue)) {
//       console.log(true);
//       return true;
//   }
//   else {
//       console.log(false);
//       return false;
//   }
// };