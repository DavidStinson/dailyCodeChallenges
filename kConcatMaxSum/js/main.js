/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function concatenationMaxSum(arr, k) {
    let numArray = [];
    let count = 0;
    let maxSum = 0;
    let sum = 0;
    while (count != k) {
        numArray = numArray.concat(arr);
        count ++;
    }
    for (let i = 0; i<numArray.length; i++) {
        sum += numArray[i];
        if (maxSum < sum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}