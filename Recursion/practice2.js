// sumRange using recursion

function sumRange(num){
    if(num === 1 ) return 1;
    return num + sumRange(num -1);
}

/*  Stack process 

  retun 4 + sumRange(num) ----------------------------> 4 + 6 = 10
           return 3 + sumRange(num)-------------------> 3 + 3 = 6
                    return 2  + sumRange(num)---------> 2 + 1 = 3 
                                      return 1 -------> 1
*/

console.log(sumRange(4));