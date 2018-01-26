/*
 *@desc:
 *Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  @date:2018-1-26
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   var json = {};
    for(var i=0,len=nums.length;i<nums.length;i++){
        var item  = nums[i];
        if(json[item] || json[item]===0){
            return [json[item],i];
        }else{
            json[target-item] = i;
        }
    }
    
    
};

console.log("TwoSum:"+twoSum([2, 7, 11, 15],9))