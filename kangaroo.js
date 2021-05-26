function kangaroo(x1,v1,x2,v2){

let result  = 'NO'
for(let i=0; i<=10000; i++){
 if((x1 +i*v1) == (x2 +i*v2)){
     result = 'YES'
 }
}
console.log(result);
return result;
}


kangaroo(0, 2 ,5 ,3);