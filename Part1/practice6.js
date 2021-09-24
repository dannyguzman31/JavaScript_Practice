// Write a function called maxSubarraySum which accepts an array of integers and a number call n. The function should calculate the maximum sum of n consecutive elements in the array. 

// O(n)
function maxSubarraySum(arr, num){

    // variables to pass temp values 
    let maxSum = 0;
    let tempSum = 0;
    // if the num is greater than the length of the array then return null
    if (arr.length < num) return null;
    // loop through the array 
    for (let i = 0; i < num; i++){
        // add the first (num) array index and place the sum in maxSum
        maxSum += arr[i];
    }

    // temporarily place maxSum into tempSum 
    tempSum = maxSum;

    // loop through the array 
    for(let i = num; i < arr.length; i++) {
        // this time use tempsum and subtract left and add right index
        tempSum = tempSum - arr[i - num] + arr[i];
        // compare which is max 
        maxSum = Math.max(maxSum, tempSum);
    }
// return max 
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));