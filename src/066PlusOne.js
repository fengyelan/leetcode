/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-09 10:11:25
 * @version $Id$
 */

/**
 * @desc
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

给定一个数组存储的非负整数，计算其加一之后的值

 [0] ==> [1] 
 [5, 0] ==> [5, 1] 
 [1, 0, 9] ==> [1, 1, 0] 
 [1, 9, 9] ==> [2, 0, 0] 
 [3, 0, 7, 9] ==> [3, 0, 8, 0]
 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length,
    	i=len-1,
    	flag = 1;
    while(i>-1){
    	let add = digits[i] + flag;
    	flag = add>=10 ? 1 : 0;
    	digits[i] = add%10;
    	i--;
    }
    if(flag){
    	digits.push(flag);
    }
    return digits;
};