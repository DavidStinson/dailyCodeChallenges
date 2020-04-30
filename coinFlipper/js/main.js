/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

function coinFlipper(n) {
  let numberOfVariations = Math.pow(2, n)
  let variations = Array(numberOfVariations).fill("")

  function flipCoin(flips) {
    flipper = 1
    if (flips === 0) {
      return variations
    }
    let numberOfConsecutiveHeadsOrTails = Math.pow(2, flips) / 2
    let i = 0
    while (i < numberOfVariations) {
      for (let j = 0; j < numberOfConsecutiveHeadsOrTails; j++) {
        if (flipper === 1) variations[i] = variations[i].concat("H")
        if (flipper === -1) variations[i] = variations[i].concat("T")
        i++
      }
      flipper *= -1
    }
    return flipCoin(flips-1)
  }
  return flipCoin(n)
}

runA = coinFlipper(2)
runB = coinFlipper(3)
runC = coinFlipper(4)
runD = coinFlipper(20)

console.log(runA)
console.log(runB)
console.log(runC)
console.log(runD)
