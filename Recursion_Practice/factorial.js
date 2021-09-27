
/* 
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it. E.g Factorial of 4 (4!) is 24 because 4 *3*2*1 is 24. Factorial zero (0!) is always 1. 
*/

function factorial(number){
    // base case 
    if (number < 0) return 0;
    if (number <= 1) return 1; 
    return number * factorial(number - 1);
}

console.log(factorial(4));