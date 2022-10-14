function getdata(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(a>0){
            resolve(a);
        }
        else{
            reject("Promise Failed !");
        }
    },1000,a);
    });
}

function getid(b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(b<100){
            resolve(b);
        }
        else{
            reject("Promise Failed !");
        }
    },1300,b);
    });
}

function getname(c){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(c==10){
            resolve(c);
        }
        else{
            reject("Promise Failed !");
        }
    },1400,c);
    });
}

getdata(10)
.then((value)=>{
    console.log(value);
    return getid(value);
})
.then((value)=>{
    console.log(value);
    return getname(value);
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});

