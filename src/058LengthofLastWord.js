/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-31 14:36:02
 * @version $Id$
 */

/**
 *@desc
 *58. Length of Last Word
 *Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

	If the last word does not exist, return 0.

	Note: A word is defined as a character sequence consists of non-space characters only.

	Example:

	Input: "Hello World"
	Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

	s = s.replace(/^\s+|\s+$/g,'');

	if(!s.length){
		return 0;
	}

	let res = 0;
    for(let len = s.length,i=len-1;i>=0;i--){
    	let ch = s.charAt(i);
    	if(ch!==' '){
    		res++;
    	}else{
    		return res;
    	}
    }
    return res;
};

console.log("Length of Last Word:Hello World  is "+lengthOfLastWord("Hello World"));