a =[2, 4];
b= [16, 32, 96];

function getTotalX(a,b){
    let count =0;

    for(let i=1; i<=100; i++){
        if(a.every(int=>(i % int == 0))){
            if(b.every(int=>(int % i == 0))){
                count++;
            }
         }
    }
    console.log(count);
    return count;
}

getTotalX(a,b)