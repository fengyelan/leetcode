/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-31 11:14:00
 * @version $Id$
 */

/**
 * @desc
 * 20. Valid Parentheses
   
	Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

	The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let s_arr = [];
    for(let i=0,len = s.length;i<len;i++){
    	let ch = s.charAt(i);
    	if(ch=="(" || ch=="{" || ch=="["){
    		s_arr.push(ch);
    	}else if(ch==")"){
    		let end_ch = s_arr.pop();
    		if(end_ch!="("){
    			return false;
    		}
    	}else if(ch=="}"){
    		let end_ch = s_arr.pop();
    		if(end_ch!="{"){
    			return false;
    		}
    	}else if(ch=="]"){
    		let end_ch = s_arr.pop();
    		if(end_ch!="["){
    			return false;
    		}
    	}
    }
    return s_arr.length === 0;
};

console.log("Valid Parentheses:([]{[]}()):"+isValid("([]{[]}())"));
console.log("Valid Parentheses:():"+isValid("()"));
console.log("Valid Parentheses:([):"+isValid("([)"));