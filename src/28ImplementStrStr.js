/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-27 14:05:07
 * @version $Id$
 */

/**
 * @desc
 * Implement strStr().

	Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
	Example 1:

	Input: haystack = "hello", needle = "ll"
	Output: 2
	Example 2:

	Input: haystack = "aaaaa", needle = "bba"
	Output: -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len_n = needle.length,
        len_h = haystack.length,
        ch_n_0 = needle.charAt(0);
    if(!len_n){
        return 0;
    }
    if(len_n>len_h){
        return -1;
    }
    for(let i=0;i<=len_h-len_n;i++){
        let ch_h = haystack.charAt(i);      
        if(ch_h==ch_n_0 && haystack.slice(i,i+len_n)===needle){
            return i;  
        }
    }
    return  -1;
};

console.log(strStr("hello","ll"));