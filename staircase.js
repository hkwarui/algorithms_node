function staircase(n){

if(n >0 && n <= 100){
    for(let i =1 ; i<=n ; i++){
    
        console.log(" ".repeat(n-i) + '#'.repeat(i));
    } 
}
}

staircase(95);