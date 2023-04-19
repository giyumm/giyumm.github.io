function load() {
    let column_1 =[5,2,3,4,10,9,4,5,2,1,8,5,7,2,3,4,10,1,9,4,5,2,1,8,3,6,4,3,2,10]
    let column_2 =[5,4,9,2,1,8,5,3,4,10,9,1,5,9,1,8,5,3,2,3,4,3,9,4,5,2,1,8,3,6,5]
    let column_3 =[64,43,70,62,95,59,58,88,59,96,85,72,83,67,78,89,84,75,46,65,98,46,54,73,50,100,89,57,71,47]
    let column_4 =[46,73,80,52,85,69,77,66,43,67,66,48,94,91,50,87,76,56,71,59,88,76,97,51,78,74,85,87,63,91]
    sum1=0;
    for (i = 0;i<column_1.length;i++){
        sum1=sum1+column_1[i];
    }
    sum2=0
    for (i = 0;i<column_2.length;i++){
        sum2=sum2+column_2[i];
    }
    sum3=0
    for (i = 0;i<column_3.length;i++){
        sum3=sum3+column_3[i];
    }
    sum4=0
    for (i = 0;i<column_4.length;i++){
        sum4=sum4+column_4[i];
    }

    let sums = [sum1,sum2,sum3,sum4];
    let total_score =sums[0]+sums[1]+sums[2]+sums[3];
    
    //alert("Sum=="+sum); 
    const result ={
        col1:column_1,
        col2:column_2,
        col3:column_3,
        col4:column_4,
        sums:sums,
        total_score: total_score
    }  
    console.log (result) 	

}