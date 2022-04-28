//PROMISE: These are also asynchronous and web Apis
//Three employerr
//1.pending//initially all the promises will be in pending
//2.resolved
//3.rejected

// what is call back hell or piramid of doom=>call backs
//TO OVER COME THE PROBLEM OF DOOM promises was introduced

//SYNTAX:
//new Promise(function(resolve,reject)){
//resolve()
//reject()
//}

//resolve and rejects are function

new Promise(function (resolve,reject){
    if(10>11){
        resolve("SUCCESS");
    }else{
        reject("ERROR");
    }
    })
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});


