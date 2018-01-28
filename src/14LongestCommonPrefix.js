/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-28 15:26:19
 * @version $Id$
 */

/**
 * @dssc
 * Write a function to find the longest common prefix string amongst an array of strings.
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * [longestCommonPrefix description]
 *  首先找出所有字符串中字符串的最小长度，因为所有的字符串的公共前缀长度是不大于最小长度的
 *  然后以第一个字符串作为标准，将第一个字符串中第一个字符和其他所有的字符串中的第一个字符作比较，
 *  以此类推，将第-个字符串中第二个字符和其他所有的字符串中的第二个字符作比较......
 *  最后比较到某个字符不相等的话，于是得到的公共字符串
 * 
 */
var longestCommonPrefix = function(strs) {

    let min =  strs[0] && strs[0].length,
    	min_index = 0,
        len=strs.length;

    for(let i=1;i<len;i++){
        let min_new = strs[i].length;
        if(min_new < min){
            min = min_new;
            min_index = i;
        }

    }

    for(let j=0;j<min;j++){
    	for(let k=1;k<len;k++){
    		if(strs[0].charAt(j)!==strs[k].charAt(j)){
    			return strs[0].slice(0,j);
    		}
    	}
    }

    return strs[min_index] || '';
};

console.log("longestCommonPrefix:"+longestCommonPrefix(["aaa","aa","aaaaaa"]));