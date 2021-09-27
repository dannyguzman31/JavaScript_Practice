// write a function that accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callbak, otherwise it returns false.

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

console.log(someRecursive([4,6,8,9], isOdd));