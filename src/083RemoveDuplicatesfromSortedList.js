/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-06 10:33:46
 * @version $Id$
 */

/**
 * @desc
 * 83. Remove Duplicates from Sorted List
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

	For example,
	Given 1->1->2, return 1->2.
	Given 1->1->2->3->3, return 1->2->3.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	let cur = head;
	while(cur){
		while(cur.next && cur.next.val == cur.val){
			cur.next = cur.next.next;
		}
		cur = cur.next;
	}
	return head;
};