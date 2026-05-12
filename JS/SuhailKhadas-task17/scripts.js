const divofnumber= (a,b)=>{
    return new Promise((resolve,reject)=>{
        if(b==0){
            reject("Division by zero is not allowed");
        }
        else{
            resolve(a/b);
        };
    });
}

divofnumber(10,0).then(result=>console.log(result))
.catch(error=>console.log(error));