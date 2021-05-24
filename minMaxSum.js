arrrt = [1,2,3,4,5];

function minMaxSum(arr){
   let sum = arr.reduce((a,b)=>{ return a +b },0);

   let min = sum - Math.max(...arr);
   let max = sum - Math.min(...arr);

    console.log(`${min} ${max}`);

}

minMaxSum(arrrt)