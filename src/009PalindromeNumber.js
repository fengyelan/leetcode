/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-28 14:33:32
 * @version $Id$
 */

/**
 * @desc
 * Determine whether an integer is a palindrome. Do this without extra space.

	click to show spoilers.

	Some hints:
	Could negative integers be palindromes? (ie, -1)

	If you are thinking of converting the integer to string, note the restriction of using extra space.

	You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

	There is a more generic way of solving this problem.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
    	return false;
    }
    let temp_x = x,res = 0;
    while(temp_x){
    	res = res*10 + temp_x%10,
    	temp_x = parseInt(temp_x/10);
    }
    return  res === x;
};

console.log("isPalindrome:123 is "+isPalindrome(123));