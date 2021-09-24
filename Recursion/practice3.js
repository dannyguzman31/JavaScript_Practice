// Factorial using Iteratively solution 

// function factorial(num){
//     let total = 1;

//     for ( let i = num; i > 1; i-- ){
//         total *= i;
//     }

//     return total;
// }

// console.log(factorial(5));


// Factorial using recursion 

function factorial(num){
    // endpoint 
    if(num === 1) return 1; // if factorial ==1 , end; 
    return num * factorial(num-1);
}

console.log(factorial(5));