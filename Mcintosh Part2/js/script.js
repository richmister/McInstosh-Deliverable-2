var inches;
inches= prompt("How many of inches fell?")

var fertilizer;
fertilizer=prompt("Did you use fertilizer?");

if (fertilizer=== 'yes') {
   type=prompt("Did you use premium or regular fertilizer ?")
 } else {

 }  

console.log("*".repeat(inches));

var x=50
const result1=[(x-[x*0.1])] // Down by 10%
const result2=[(x-[x*0.2])] // Down by 20%

if (inches>=20 && fertilizer=='no'){
 console.log("The yield should be",result1,"bushels per acre.")
}

else if (inches<=10 && fertilizer=='no'){
 console.log("The yield should be",result2,"bushels per acre.")
}

else if (fertilizer=='no'){
 console.log("The yield should be",x,"bushels per acre.")
} 


else if (inches>=20 && fertilizer=='yes' && type=='regular'){
 console.log("The yield should be",Number(result1)+Number(result1*0.1),"bushels per acre.")
}

else if(inches>=20 && fertilizer=='yes' && type=='premium'){
 console.log("The yield should be",Number(result1)+Number(result1*0.15),"bushels per acre.")
}

else if(inches<=10 && fertilizer=='yes' && type=='regular'){
 console.log("The yield should be",Number(result2)+Number(result2*0.1),"bushels per acre.")
}


else if(inches<=10 && fertilizer=='yes' && type=='premium'){
 console.log("The yield should be",Number(result2)+Number(result2*0.15),"bushels per acre.")
}


else if (10<inches<20 && fertilizer=='yes' && type=='premium'){
 console.log("The yield should be",Number(x)+Number(x*0.15),"bushels per acre.")


}
else{
 console.log("The yield should be",Number(x)+Number(x*0.1),"bushels per acre.")
}