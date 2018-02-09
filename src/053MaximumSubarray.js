/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-01 09:58:51
 * @version $Id$
 */
/**
 * @desc
 * 53. Maximum Subarray
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

	For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
	the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/*
 *@思路
 *记录一下数组子串的元素和的最大值，比较这个最大值和当前数组元素的大小
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length==0){
        return 0;
    }

    let res = nums[0],
        maxRes = res;
    
    for(let i=1,len=nums.length;i<len;i++){
    	res += nums[i];
    	res = Math.max(res,nums[i]);
        maxRes = Math.max(maxRes,res);
    }
    return maxRes;
};