// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, 
// write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;        // 记录当前位置
            right = mid - 1;     // 向左继续找
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;        // 记录当前位置
            left = mid + 1;      // 向右继续找
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function sortedFrequency(arr, num) {
    const first = findFirst(arr, num);
    if (first === -1) return -1;

    const last = findLast(arr, num);
    return last - first + 1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)); // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)); // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)); // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)); // -1