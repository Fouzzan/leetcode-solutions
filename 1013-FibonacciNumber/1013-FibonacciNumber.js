// Last updated: 7/12/2026, 10:39:41 PM
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0;
    let b = 1;

    let sum = 0;


    if(n < 2){
            return n
        }
    else{
          for (let i = 2; i <= n; i++){
        
        sum = a + b ;
        a = b;
        b = sum;
        
    }
    }
  
    return sum;
    
};