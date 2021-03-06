/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * param {TreeNode} root
 * return {TreeNode}
 */

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function invertTree(root) {
  if (root) {
    let holder = root.right;
    root.right = root.left;
    root.left = holder;
    invertTree(root.right)
    invertTree(root.left)
  }
  return root
};

