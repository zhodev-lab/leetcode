// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

const isSubsequence = (firstStr, secStr) => {
    let first = 0;
    let sec = 0;
    // ask first give me one letter 
    // ask sec give me one letter 
    while(first < firstStr.length && sec < secStr.length){
        if(firstStr[first] === secStr[sec]){
            first++;
            sec++;
        }else{
            sec++;
        }
    }
    // console.log(first, sec)
    if(sec<=secStr.length && first === firstStr.length){
        return true;
    }else{
        return false;
    }
    // if same  next step both add one 

    // if different sec need to provide me one more until it is equal 

}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('abc', 'acbd')); // false (order matters)