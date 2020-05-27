/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} head
 * param {number} n
 * return {ListNode}
 */

// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Follow up:
// Could you do this in one pass?

function removeNthFromEnd(head, n) {
  let count = 1;
  let walker = head;

  while (walker.next) {
    count++;
    walker = walker.next;
  }

  let returnIndex = count - n;
  walker = head;

  while (returnIndex > 1) {
    walker = walker.next;
    returnIndex--;
  }

  walker.next = walker.next.next;
  return head;
}
