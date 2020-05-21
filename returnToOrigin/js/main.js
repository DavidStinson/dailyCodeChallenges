/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

var judgeCircle = function (moves) {
  moveOptions = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };

  for (let i = 0; i < moves.length; i++) {
    moveOptions[moves[i]]++;
  }

  return !(moveOptions.U - moveOptions.D) && !(moveOptions.L - moveOptions.R);
};

console.log(judgeCircle("LR"));
console.log(judgeCircle("UD"));
console.log(judgeCircle("UL"));
console.log(judgeCircle("RR"));
console.log(judgeCircle("LL"));
