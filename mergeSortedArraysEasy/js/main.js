/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

//     The number of elements initialized in nums1 and nums2 are m and n respectively.
//     You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  index = 0;
  while (nums2.length) {
    if (nums1[index] > nums2[0]) {
      nums1.splice(index, 0, nums2[0]);
      nums2.shift();
    }
    if (index >= nums1.length) {
      nums1.push(nums2[0]);
      nums2.shift();
    }
    index++;
  }
  return nums1;
}
