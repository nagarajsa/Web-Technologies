//promise first state pending:

// let promise1=new Promise(function(reslove, reject)
// {
//     console.log("Promise state is Pendding....!");
// })
// console.log(promise1);



// //promise second state fullfill

// var promise2=new Promise(function(reslove, reject)
// {
//     reslove("Promise state is fullfill...!")
// })
// console.log(promise2);



// //promise second state reject

// var promise3=new Promise(function(reslove, reject)
// {
//     reject("Promise state is rejected...!")
// })
// console.log(promise3);



//how to handle the error, through catch method
var rej=new Promise(function(reslove,reject)
{
    console.log("promise will be Pennding...!");
    setTimeout (function()
   {
    reject("promise is reject");

   },300)
})

console.log(rej, typeof rej);
rej.catch((error)=>{
    console.log(error);
})