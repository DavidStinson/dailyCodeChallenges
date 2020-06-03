/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

function aCostOfTwoCities(costs) {
  let totalCost = 0;
  let peopleToCityA = costs.length/2
  let peopleToCityB = peopleToCityA;

  costs.sort((a,b) => Math.abs(b[0]-b[1])-Math.abs(a[0]-a[1]));

  for(let i=0; i<costs.length; i++){
    if((costs[i][0] < costs[i][1] && peopleToCityA) || !peopleToCityB) {
        totalCost += costs[i][0]
       peopleToCityA--
    }else{
        totalCost += costs[i][1]
        peopleToCityB--
    }
  }
  return totalCost;
}
