
//JSON:
//1] STRINGYFY(), 2]PARSE()

//1] STRINGYFY():
 let d={
    id:11,
    name:"nagu"
 }
console.log(d);

let str=JSON.stringify(d);
console.log(str);


//2] PARSE()

let parse=JSON.parse(str);
console.log(parse);



//prototype model: prototype model is process of searching data which data is missing and find out in prototype model.
// let ob1={
// id:1,
// name:"lala"
// }

//console.log(ob1);

// let ob2={
//     tsk:()=>{
//         confirm("task function")
//     }
// }

// ob1.__proto__=ob2
// console.log(ob1.tsk());




// let ob3={
//     id:111,
//     name:"Shiva"
// }

// ob1.__proto__ob2
// console.log(ob2.name);
































// let obj1={
//     id1:11,
//     name:"Shiva"
// }
// console.log(obj1);

// let obj2={
//     task:()=>{
//         confirm("This is Task function...!")

//     }
// }
// obj1.__proto__=obj2;
// obj2.__proto__={
//     id:110
// }

// console.log(obj1.id);



// console.log(obj1.task());