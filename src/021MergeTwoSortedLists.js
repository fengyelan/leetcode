/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-31 11:29:51
 * @version $Id$
 */

/**
 * @desc
 * 21. Merge Two Sorted Lists
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

	Example:

	Input: 1->2->4, 1->3->4
	Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let  head = new ListNode(0),
    temp = head;
    while(!!l1 && !!l2){
    	if(l1.val<=l2.val){
    		temp.next = l1;
    		l1 = l1.next;
    		temp=temp.next;  
    	}else{
    		temp.next = l2;
    		l2 = l2.next;
    		temp=temp.next;  
    	}
    }
    if(!!l1){
    	temp.next = l1;
    }

    if(!!l2){
    	temp.next = l2;
    }

    return head.next;
};




