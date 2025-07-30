// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

const maxSubarraySum = (arr, len) => {
    // pick the len of arr in the arr
    // summary it 
    
    if(arr.length < len) return null; // if the length of arr is less than len, return null
    let maxSum = 0;
    let tempSum = 0;

    // if the len is greater than the arr length    // then pop the first element and append the next element
    for(let i = 0; i < len; i++){
        maxSum += arr[i]; // sum the first len elements
    };
    tempSum = maxSum; // set tempSum to maxSum

    for(let i = len; i < arr.length; i++){
        tempSum = tempSum - arr[i - len] + arr[i]; // slide the window by subtracting the first element of the previous window and adding the next element
        maxSum = Math.max(maxSum, tempSum); // update maxSum if tempSum is greater
    }

    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null