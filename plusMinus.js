const arrrt = [1,1,0,-1,-1];
function plusMinus(arr){

    let positives=0, negatives=0, zeros=0;

    const len = arr.length || 0;

    if(len > 0 && len <=100){
    arr.map((elem)=>{
        if(elem > 0){
            positives++;
        } else if(elem < 0){
            negatives++;
        } else {
            zeros++
        }

        return elem;
    });

    }

    console.log((positives / len).toFixed(6));
    
    console.log((negatives / len).toFixed(6));
    
    console.log((zeros / len).toFixed(6));
}

plusMinus(arrrt);