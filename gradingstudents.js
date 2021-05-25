function gradingStudents(grades){
   for(let i = 0; i < grades.length; i++){
       
            if(grades[i] <= 100) {
                let mod = grades[i] % 5;
               (mod ==0 || grades[i] < 38) ? (grades[i] = grades[i]) :(((5-mod)< 3) ? (grades[i] = 5 + grades[i] - mod) : grades[i] = grades[i])
             } 
     }     
              
 console.log(grades);
  return grades;

    
}

gradingStudents([73,67,38,33]);
