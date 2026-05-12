const number= [4,8,2,11,6,7,10];
const findmax =(array) =>{
    let max=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
       
    }
     console.log("Max Number", max);
}
findmax(number);

const sum= (array) =>{
    let sum =0;
    for(let i=0;i<array.length;i++){
        sum= sum+array[i];
    }
    console.log("Sum of all numbers",sum);

}
sum(number);

const odd=function(array)
{
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i] %2 !== 0){
            count=count+1;
        }
    }
    console.log("Number of odd numbers", count);
}
odd(number)

