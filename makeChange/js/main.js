/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function makeChange(coins, amount) {
  coins.sort((a, b) => a - b)
  let result = 0;
  for (let i = coins.length - 1; i > 0; i--) {
    while (coins [i] <= amount) {
      amount -= coins[i]
      result += 1;
    }
  }
  console.log(amount)
  if (amount) {
    return -1
  }
  return result
}