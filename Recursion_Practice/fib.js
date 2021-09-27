
// write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.

function fib(n){

    // base case 
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(28));