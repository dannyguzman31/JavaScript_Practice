/* 
    Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or formed by rearranging the letters of another, such as cinema, formed from iceman. 
*/

// given two strings, write a function to determine if the second string is an anagram of the first. Ex:  cinema forms iceman

function validAnagram(first, second){
    // if lenght of first not equals to second, then is false.
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exits, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then its not an anagram 
        if (!lookup[letter]){
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('rat','car'));