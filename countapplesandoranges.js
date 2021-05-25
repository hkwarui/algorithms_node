const s =7,t=10,a=4,b=12, apples=[2,3,-4], oranges=[3,-2,-4];
function countAppleAndOranges([s,t,a,b,apples,oranges]){
let applesCount = 0;
let orangesCount = 0;

//For Apples
    for(let i=0; i<= apples.length; i++){
        let dist = a + apples[i];

        if(dist <= t && dist >= s){
            applesCount ++;
        }
    }

//For oranges
      for(let i=0; i<= oranges.length; i++){
        let dist = b + oranges[i];

        if(dist <= t && dist >= s){
            orangesCount ++;
        }
    }
// Debug Output 
     console.log(applesCount);
    console.log(orangesCount);
    
return { applesCount , orangesCount }

   
}

countAppleAndOranges([s,t,a,b,apples,oranges])

