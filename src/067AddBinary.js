/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-08 16:43:43
 * @version $Id$
 */

/**
 * @desc
 * Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    let a_len = a.length,
    	b_len = b.length,
    	i=a_len-1,
    	j=b_len-1,
    	flag=0,
    	res="";

    while(i>-1 ||  j>-1 || flag){
    	let a_num = i>-1 ? parseInt(a.charAt(i--)) : 0,
    		b_num = j>-1 ? parseInt(b.charAt(j--)) : 0,
    		add = flag + a_num + b_num;

    	flag = add>=2 ? 1 : 0;

    	res = add%2 + res;
    	
    }

    return res;
};


console.log(addBinary("10","10"));