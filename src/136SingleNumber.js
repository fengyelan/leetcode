/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-08 16:15:07
 * @version $Id$
 */

/**
 * @desc
 * Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
  *这是我的解法 ，并不好,还需要for两次
  *在讨论区里面看了大拿的解法，使用到了异或
  *5^4^5=4
 */
var singleNumber = function(nums) {
	let json = {};
    for(let i=0,len = nums.length;i<len;i++){

    	let item = nums[i];
    	json[item+""] = !!json[item+""] ? (json[item+""] + 1) : 1;
    		
    }

    for(let key in json){
    	if(json[key]==1){
    		return parseInt(key);
    	}
    }
};

var singleNumber = function(nums) {

	let res = nums[0];
	
    for(let i=1,len = nums.length;i<len;i++){


    	res^=nums[i];
    		
    }

    return res;
   
};



console.log(singleNumber([2,2,1]));