/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-28 14:52:30
 * @version $Id$
 */

/**
 * @desc 
 * Given a roman numeral, convert it to an integer.

	Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
 /*
  *从右边开始，发现右边的字母代表的数字比左边的字母代表的数字大的话，需要减去左边的数字，否则就是加
  *
  */
var romanToInt = function(s) {
    let romanToNums = {
    	M:1000,
    	D:500,
    	C:100,
    	L:50,
    	X:10,
    	V:5,
    	I:1
    };
    let res = 0,
    	pre = 0;
    for(let len=s.length,i=len-1;i>=0;i--){
    	let ch = s.charAt(i),
    		cur = romanToNums[ch];
    	if(pre>cur){
            res -= cur;
        }else{
            res += cur;
        }
    	pre = cur;
    	
    }
    return res;
};

console.log("romanToInt:"+romanToInt("MCDXXXVII"));