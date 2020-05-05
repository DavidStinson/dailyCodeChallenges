// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"

//This was written by Alan and is more efficient than the one I wrote






// This is mine!

function coinFlipper(n) {
  let numberOfVariations = Math.pow(2, n)
  let variations = Array(numberOfVariations).fill("")

  function flipCoin(flips) {
    if (flips === 0) {
      return variations
    }
    let flipper = 1
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

runA = coinFlips(2)
runB = coinFlips(3)
runC = coinFlips(4)
runD = coinFlips(20)

console.log(runA)
console.log(runB)
console.log(runC)
console.log(runD)
