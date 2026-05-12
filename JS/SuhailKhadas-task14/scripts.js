
let sum=0;
let number=153 ;
console.log("1) Sum of N numbers")
for( let i =1;i<=number;i++){
    sum= sum+i;
}
console.log("The sum of "+ number + " is "+sum);
console.log("---------------------------------")

console.log("2) Table of " + number)
let table =0;
for(i=1;i<=10;i++){
    table= number*i;
    console.log(number + " x "+i+" = "+table);
}



let count=0;
for(i=1;i<=number;i++){
    if(number%i==0){
        count= count+1; 
    }

}
let answer;

if(count==2){
    answer="Yes, "+ number +" is prime number ";
}
else{
    answer="No, "+ number +" is not prime number ";
}
console.log("---------------------------------")
console.log("3) IS " +number+ " prime number? : "+ answer)

console.log("---------------------------------")
console.log("4) Sum of all digits in a number")

let sum_digits=0;
let n1= number;
 while(n1>0){
    
    let mod = n1% 10; //divide number with 10 to get mod 
    
    sum_digits= sum_digits + mod;
    
    n1= (n1-mod)/10;
    }
    console.log("Sum of the digits of "+number+ " is: "+sum_digits);


console.log("---------------------------------")
console.log("5) Checking is Amstrong number or not")

let digit_count=0;
let n2=number;
let ams=0;
//count digit
while(n2>0){
    digit_count ++;
    let mod2 =n2% 10; // divide nuber with 10 to get mod
    n2=(n2 - mod2)/10;
}

//ams
let n3 =number;
while(n3>0){
    let mod3 =n3% 10; // divide nuber with 10 to get mod
    ams=ams+(mod3**digit_count);
    n3= (n3-mod3)/10;
    
}
if(ams=== number){
    console.log(number+ " is amstrong number")
}
else{
    console.log(number+ " is not an amstrong number")
}
