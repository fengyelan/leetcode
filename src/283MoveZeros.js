/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-08 10:16:04
 * @version $Id$
 */

/**
 * @desc
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

	For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

	Note:
	You must do this in-place without making a copy of the array.
	Minimize the total number of operations.

	移除数组中所有是0的元素，并且保持其余的非零元素在数组中的顺序不变

 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let res=0,i=0,len=nums.length;
    while(i<len){
    	if(nums[i]){
    		nums[res++] = nums[i];
    	}
    	i++;
    }
    
    while(res<len){
    	nums[res++] = 0;
    }
};

