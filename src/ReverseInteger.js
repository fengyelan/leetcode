/**
 * @desc
 * Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
    Output:  321
    Example 2:

    Input: -123
    Output: -321
    Example 3:

    Input: 120
    Output: 21

 *@date 2017-1-26
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let max = Math.pow(2,31)-1,
        min = Math.pow(-2,31);
    
    if(x>max || x<min || x==0){
        return 0;
    }
    
    let temp_num = x>0 ? x : -x,
        res = 0;

    while(temp_num){
        res = res*10 + temp_num%10;
        temp_num = parseInt(temp_num/10);
    }
    
    res = x>0 ? res : -res;
    
    if(res>max || res<min ){
        return 0;
    }
    
    return res;
   
};

console.log("ReverseInteger:"+reverse(-120));