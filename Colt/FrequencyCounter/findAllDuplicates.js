// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 2]) // array with 1
// Time Complexity - O(n)

function findAllDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  const res = new Set();
  const dict = {};

  for(const ele of arr){
    if(ele in dict){
        dict[ele]++;
        if(dict[ele] === 2){
            res.add(ele)
        }else{
            res.delete(ele)
        }
    }else{
        dict[ele] = 1;
    }
  }
  return [...res];
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 2])) // array with 1