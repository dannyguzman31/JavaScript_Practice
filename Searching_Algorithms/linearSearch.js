

//Write a function which accepts an array an value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, value){
    // loop through the array
    for( var i = 0; i < arr.length; i++){
        // if value = array
        if (arr[i] === value){
            // return index
            return i;
        }
    }
    // else return -1
    return -1;
}

console.log(linearSearch([10,15,20,25,30], 15));
