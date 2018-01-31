/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-27 13:23:06
 * @version $Id$
 */

/**
 * @desc
 * Given an array and a value, remove all instances of that value in-place and return the new length.

	Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

	The order of elements can be changed. It doesn't matter what you leave beyond the new length.
	Example:

	Given nums = [3,2,2,3], val = 3,

	Your function should return length = 2, with the first two elements of nums being 2.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var res = 0;
    nums.forEach(function(item){
        if(item!=val){
            nums[res++] = item;
        }
    });
    return res;
};

console.log(removeElement([2,3,4,3],3));

