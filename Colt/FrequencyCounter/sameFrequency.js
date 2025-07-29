// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


const sameFrequency = (num1, num2) => {
    const a = new Array(10).fill(0);
    const b = new Array(10).fill(0);
    
    while(num1){
        const num = num1 % 10;
        num1 = Math.floor(num1/10);
        a[num]++;
    }
    while(num2){
        const num = num2 % 10;
        num2 = Math.floor(num2/10);
        b[num]++;
    }
    for(const index in a){
        if(a[index] !== b[index]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false


