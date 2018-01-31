/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-31 14:14:39
 * @version $Id$
 */
/**
 * @desc
 * Remove Duplicates from Sorted Array
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || nums.length===0){
    	return 0;
    }

    let res = 1;

    for(let i=1,len = nums.length;i<len;i++){

    	if(nums[i] !== nums[i-1]){
    		nums[res++] = nums[i];
    	}
    	
    }



    return res;
};

console.log("removeDuplicates:[1,2,2,3,3]:"+removeDuplicates([1,2,2,3,3]));