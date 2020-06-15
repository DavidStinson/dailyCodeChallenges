/*-------------------------------- Functions --------------------------------*/

var searchBianrySearchTree = function(root, val) {
  while (root && root.val !== val) {
    if (val < root.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return root;
}