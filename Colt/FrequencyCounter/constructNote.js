// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given, 
// or it should return false.

// Assume that there are only lowercase letters 
// and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters){
  // add whatever parameters you deem necessary - good luck!
  const hashMap = new Map();
  for(let i = 0; i<letters.length; i++){
    let num = 1;
    if(hashMap.has(letters[i])){
        num = hashMap.get(letters[i]) + 1;
    }
    hashMap.set(letters[i], num);
  }
  console.log(hashMap);
  for(let i = 0; i<message.length; i++){
    const ele = message[i];
    if(hashMap.has(ele) && hashMap.get(ele)>0){
        const num = hashMap.get(ele);
        hashMap.set(ele, num -1);
    }else{
        return false;
    }
  }
  return true;
}

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true