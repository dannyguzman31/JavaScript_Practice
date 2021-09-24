// write a function call sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist 


function sumZero(arr){
    let left = 0; // pointer from left
    let right = arr.length -1; // pointer from right 

    // while left is less than right 
    while (left < right) {
        // Check the sum of array left and right
        let sum = arr[left] + arr[right];
        // if sum is 0 
        if (sum == 0){
            // return array left and array right 
            return [arr[left], arr[right]];
        } 
        // else if sum is greater than 0
        else if(sum > 0){
            // subtract 1 from right (move left)
            right--;
        }
        // add 1 to right (move right)
        else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));