// Get the second largest number and second smallest

function getSecondLargest(nums){
  const sorted =  nums.slice().sort((x,y)=>y - x) //Slice to keep a copy of original array

    let neNums = [...new Set(nums)];
    let newNums = [...new Set(sorted)];

    return [ neNums[1], newNums[1] ];
}

console.log(getSecondLargest([4,5,6,9,12,4,4,6,9,12,12,12]));