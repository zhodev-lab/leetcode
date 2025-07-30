// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
//  write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

const countZeroes = (nums) => {

    let res = 0;
    let left = 0;
    let right = nums.length - 1; 
    if(nums[left] === 0) return nums.length;
    if(nums[right] === 1) return 0;
    while(left < right){
        if(nums[left] === 1 && left+1 < nums.length && nums[left + 1] === 0){
            return nums.length - left - 1;
        }
        const mid = Math.floor((right + left) / 2);
        if(nums[mid] === 1){
            left = mid;
        }else {
            right = mid;
        }   
    }

    return res;
}
console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0


