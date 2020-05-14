/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

[0,0,1,1,1,2,2,3,3,4]

function RemoveDuplicates(nums) {
  nums.forEach((num, idx) => {
    let numAfter = idx + 1
    let spliceCount = 0
    while (num === nums[numAfter]) {
      spliceCount++
      numAfter++
    }
    if(spliceCount) nums.splice(idx + 1, spliceCount)
  });
};