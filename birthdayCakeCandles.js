candles = [3,2,1,3,3,3];

// function birthdayCakeCandles(candles){
//     let len = candles.length;
//     if(len >=1 && len <= 50000){
//         let counts = {};
//         let max = Math.max(...candles);
        
//         candles.forEach((x)=>{counts[x]= (counts[x] || 0) +1;})
//         counts[max];
//         console.log(`${counts[max]}`);
//     }
// }

function birthdayCakeCandles(candles){
    const velas =  candles.filter(val => Math.max(...candles) === val);
    return velas.length;
}

console.log(birthdayCakeCandles(candles));