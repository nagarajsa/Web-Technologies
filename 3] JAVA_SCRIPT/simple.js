
// KEYWORDS VAR, LET, CONST

//1] VAR
/*var a;      // varible declaration
      a=10;   // variable initilization
  var a=20    // variable declaration variable initilizationin one line
      a=200;  // varible Re-initilization
  console.log(a);  //output method */




//2] LET
/*let a;  // varible declaration
a=100; // variable initilization
let b=200; //variable declaration variable initilizationin one line
     b=500; //varible Re-initilization
console.log(b);*/


//3] CONST
/*const a=100; //variable declaration variable initilizationin one line
console.log(a);*/



//pop up window alert(), prompt(), confirm()

//alert("Warning your battrey is low");

//confirm("are you 18+");23

//let a=Number(prompt("Enter the value of a"));
//et b=Number(prompt("Enter the value of b"));
//let sum=a+b;
//console.log(sum);






//Global Execution Context AND DEBUGGING.

//VAR, LET, CONST

// console.log(a);
// var a=10;
// console.log(b);
// let b=20;
// const c=100;
// console.log(c);





// DATA TYPES
// PRIMITIVE DATA TYPE AND NON-PRIMITIVE DATA TYPE.

//IMMUTABLE

// var a=100;
// var b=a;
//     a='HI';
//  console.log(b);
//  console.log(a);



//MUTABLE

//  var gg=
//  {
//     id:500,
//     name:"NAGU"

//  }
// var gg1=gg;
// console.log(gg1);
// gg.id=1000;
// console.log(gg);


//PRIMITIVE DATATYPES:
//1] NUMBER Data type

// let a=1000;
// console.log(a);

// let b=100.20;
// console.log(b);

// let c=100/5;
// console.log(c);

//var v=String(100); //converting Number to String
//console.log(v, typeof v);     //typeof is method it is use to which type of data it indicates.


//3] NULL DATA TYPE
// NULL is primitive data type, and it is BUG. BUG mean's ERROR.  NULL is typeof object
// object is NON-PRIMITIVE data type, & null doesn't comes memory space into the database.


//3]BIGINT DATA TYPE 
// we can store more numbers in variables we can use bigint data type.


// let b=BigInt(100000000);
// console.log(b);

// let a=BigInt(10000000000000);
// console.log(a, typeof a);




//4] String Data Type:

// var  v1="NAGARAJA";  // we can String within double couat " "
// console.log(v1, typeof v1);

// var  v2='NAGARAJA'; // we can String within Single couat ' '
// console.log(v2, typeof v2);

// var  v3="`NAGARAJA`"; // we can String within back tik ` `
// console.log(v3, typeof v3);

//var n=Number("Hello");   // we can't convert String to Number, it will shows NaN.
//console.log(n, typeof n);

// let n1=String(500); // we can convert Number to String it will shows 500 String. 
// console.log(n1, typeof n1);





// INTERPOLATION : it's fetch the variable data it's representing in ${` `};

// let a="motera";
// let b="V K";
// let c=200;

// console.log(`${a}  player is ${b} he scored ${c}`); // fetching the data in a varaibles.





//STRING METHOD'S
// used in console.log(b.length);
// var b="My Students is good?";
// 1] console.log(b.length); // length of the String
// 2] console.log(b.repeat(3)); // repeating 3 times
// 3] console.log(b.toUppercase()); // Shows Uppercase String
// 4] console.log(b.toLowercase()); // Shows Lowercase String
// 5] console.log(b.index(s));    // Find the index values
// 6] console.log(b.Lastindex(d)); // find the last word
// 7] console.log(b.includes(d));  // true
// 8] console.log(b.Startwith(M)); // true
// 9] console.log(b.endwith(d));  // true
// 10] console.log(b.concat('bad')); // My Students is bad
// 11] console.log(b.padStart(19,@));// @My Students is good
// 12] console.log(b.padEnd(19, ?)); //My Students is good?
// 13] console.log(b.split(" "). reverse(). join(" "));
// 14] console.log(b.subString(2.5));

// 1] console.log(b.length); // length of the String

// var b="My Students is good";
// console.log("String length is:" +b.length);

// // 2] console.log(b.repeat(3)); // repeating 3 times
// console.log(b.repeat(5));

// // 3] console.log(b.Uppercase()); // Shows Uppercase String
// console.log(b.toUpperCase());

// // 4] console.log(b.toLowercase()); // Shows Lowercase String
// console.log(b.toLowerCase());

// // 5] console.log(b.index(s));    // Find the index values
// console.log(b.indexOf('S')); // index of S is 3.

// // 6] console.log(b.Lastindex(d)); // find the last word
// console.log(b.lastIndexOf('d'));    // last index d is 18

// // 7] console.log(b.includes(d));  // true
// console.log(b.includes('M'));
// console.log(b.includes('z'));

// // 8] console.log(b.Startwith(M)); // true
// console.log(b.startsWith('M')); //true
// console.log(b.startsWith('n')); //false

// // 9] console.log(b.endwith(d));  // true
// console.log(b.endsWith('d')); //true
// console.log(b.endsWith('x')); //false

// // 10] console.log(b.concat('bad')); // My Students is bad
// console.log(b.concat(' and bad boys..!'));

// //11] console.log(b.padStart(19,@));// @My Students is good
// console.log(b.padStart(20, "@"));


// // 12] console.log(b.ponded(19, ?)); //My Students is good?
// console.log(b.padEnd(20, "@"));

// // 13] console.log(b.split(" "). reverse(). join(" "));
// console.log(b.split(" ").reverse(). join(" "));

// // 14] console.log(b.subString(2.5));
// var n="NAGARAJA";
//  console.log(n.substring(4,8));



//NON-PRIMITIVE DATA TYPES
// 1] FUNCTIONS
// 2] ARRAYS
// 3] OBJECT

//1] FUNCTION

//1] anonmous function
//  function()
//  {
//     var a=100;
//     console.log(a);
//  }

// to make execute anonmous function we need function with expression.
//  let b1=function()
//  {
//     var a=100;
//     console.log(a);
//  }
//  b1();


//2] named function
//     function demo()
//     {
//         var a=500;
//         console.log(a);
//     }
//    demo();


//3]function with expression
//  let b3=function()
//  {
//     var n=1000;
//     console.log(n);
//  }
//  b3();


//4] firstclass function

// let b4=function()
// {
//     var c=001;
//     console.log(c);
// }
// b4();

//5] Arrow function

// let n=()=>{
//     var c=700;
//     console.log(c);
// }
// n();

// ARROW FUNCTION RULES.
//1]whenever single stmt in a arrow function there is no need to use braces.

// let k1=()=>
// console.log(10+2);
// k1();

//2]whenever multiple stmt in a arrow function must and should  use braces.

// let k2=()=>
// {
//     console.log(10+2);
//     console.log(10+3)
//     console.log(10+4)
//     console.log(10+5)
// }
// k2();

//3]whenever return stmt in a arrow function must and should  use braces. and outside the braces we should write console.log().

// let k3=(a, b)=>
// {
//     return 20+30;
// }
// console.log(k3());

//4]whenever stmt in a arrow function must and should  use braces. and outside there is no need to  write console.log().

// let k4=(a,b)=>
// {
//     console.log(0+30); 
// }
// k4();


//6] Higher Order function: a function which takes as an another function arguments is called as Higher order function.

// function hof(a,b, test)
// {
//   c=test(a,b);
//   return c;
// }
// let add=hof(10, 20, function(a,b)
// {
//     return a+b;

// })
// console.log(add);



//GLOBAL EXECUTION CONTEXT
// var b=100;
// let c=200;
// console.log(c);
// console.log(b);

// function c1() {
//     var d=100;
//     console.log(d);

// }
// c1();

// function c2()
// {
//     var n=2000;
//     console.log(n);
// }
// c2();




//IIFE(IMMEDIATE INVOKING FUNCTION EXECUTION)

// let a='UMA';
// console.log(a);

// (function(){
//     let a='saroja';
//     console.log(a);
// })()






//FEC(FUNCTION EXECUTION CONTEXT): it is each and every functions how it is internally executes.

// const a=11;
// let b=12;
// console.log(a);
// console.log(b);

// function demo(){
//     var b=12;
//     console.log(b);
// }
// demo();

// function test(){
//     const d=12;
//     console.log(d);
// }
// test();




//THIS. KEYWORD 
//This is a keyword, it's holds the object address in window section.
//console.log(this);


// In function we will use this keyword. it's point to the global object
// function demo()
// {
//     console.log("The Sum of two numbers:", 10+20);
//     console.log(this);
// }
// demo();


//when this. keword used in object it points current object

// let obj={
//          name:"Navarang Bar",
//          id:104,
//          sum:function()
//          {
//             console.log(3+7);
//             console.log(this);
//          }
// }
// obj.sum();




// //SESSION STORAGE
// let a=sessionStorage.setItem("name","nagaraj")
// console.log(a);

// //LOCAL STORAGE
// let b=localStorage.setItem("name","manjunath")
// console.log(b);


//9]Callback Function: A function passing arguments of another function is called Callback Function.

// function red(name, Callback)
// {
//   console.log("Hi This is Red Function The Name is:"+" "+name);

// }
// function green(name, Callback)
// {
//     console.log("Hi this is Green Function:"+" "+name);

// }
// red("NSA")
// green("Green")

//ex:2

// function boys()
// {
//     console.log("Hi Boys");
// }
// function girls(name)
// {
//     console.log("Girls are"+" "+name);
// }
// setTimeout(boys, 5000)
// girls("Good")


//NESTED FUNCTION: A function inside another function is called as Nested Function.

// console.log("START");

// let d=50;
// let p=100;
// console.log(d, p);

// function first()
// {
//     let t=150;
//     let o=200;

//          function second()
//          {
//             console.log(t);
//             console.log(o);
//             var c=300;

//                 function third()
//                 {
//                  console.log(c);
//                 }
//                 return third();
//         }
//         return second();
// }
// first()()()


// 2] OBJECT
//Object is Non-primitive data type it is mutable.
//object is associates with properties. key and value.
//we can create object in two ways.
//  1]literals  2] constructor with new operator.


//1]literals: var,let,const

// let Emptyobj={

// }
// console.log(Emptyobj);

// let obj={
//     id:104,
//     name:"Nagaraja"
// }
// console.log(obj);

//we can fetch the object values through two ways. 1] []--->Array notation, 2] .---->dot

// let obj1={
//     id:104,
//     name:"Nagaraja"
// }
// console.log(obj1["id"]);  //[]--->Array notation

// let obj2={
//     id:104,
//     name:"Nagaraja"
// }
// console.log(obj1.name);  //.---->dot


//multiple object creation
// let Eobj={

// }
// console.log(Eobj);
// Eobj.id=11,
// Eobj.Name="Nagaraja",
// console.log(Eobj);


//2] create object using constructor with new operator.
// let x=new Object();
//     x.name="NAGARAJA",
//     x.skills=["Web", "Computer"],
//     console.log(x);  



//when keys are in numbers
// var Kobj={
//     1:104,
//     2:"nagaraja"
// }
// //console.log(Kobj.1); we can't fetch the object values through .
// console.log(Kobj[2]);



// let obj10={
//     Cname:"HP",
//     Ccost:45000,
//     features:{
//         color:"Silver",
//         shape:"Square",
//         ram:"8GB"
//     }
// }
//     console.log(obj10.features.shape);
//     console.log(obj10.Ccost);
//     //adding property for object
//     console.log(obj10.place="ILKAL");
//     console.log(obj10);

//     console.log(obj10.features.price=10000);
//     console.log(obj10);




//OBJECT METHODS
// 1] ASSIGN 2]FREEZE 3]ENTRIES 4]KEY 5]VALUES

//1] ASSIGN

// let a={
//     id:110,
//     name:"NAGARAJA"

// }

// let b={
//     id:210,
//     name:"NAVEEN"
// }

// b.id=500,      //assign it takes updated object values.
// b.name="MANJU";

// let c=Object.assign(a,b);
// console.log(c);


//2] FREEZE

// let x={
//     id:200,
//     name:"GURU"
// }
// console.log(x);
// Object.freeze(x);

// x.name="Shisya";    freeze it's can't updated.. object values
// console.log(x);


//3] ENTRIES

// let entrObj={
//     ename:"LAKSHMAN",
//     Salary:50000
// }

// console.log("Before entries");
// console.log(entrObj);

// console.log("After entries");
// console.log(Object.entries(entrObj));


//4]KEY
// let keyObj={
//     id:13,
//     name:"abc"
// }
// let key=Object.keys(keyObj);
// console.log(key);


//5]VALUES
// let valObj={
//     id:13,
//     name:"valname"
// }
// let values=Object.values(valObj);
// console.log(values);



//1] MATH OBJECT
//  let ce=9.9;
// console.log(Math.ceil(ce));

// let f1=99.9;
// console.log(Math.floor(f1));


// Math.object Max & Min number
// let num1=1000;
// let num2=5000;
// console.log(Math.max(num1,num2));
// console.log(Math.min(num1,num2));
//  console.log(Math.pow(2, 3));
//  console.log(Math.round(num1));


//2] DATE OBJECT

// let dt=new Date();
// console.log(dt, typeof dt);

// console.log(dt.getDate());
// console.log(dt.getDay());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getTime());
// console.log(dt.getHours());


// year, month, days, hours, minute, seconds, miliseconds

// let dt1=new Date(2023,0,2,11,3,12,2);
// console.log(dt1);



//MATH OBJECT
// console.log(Math.random()*100000000000000);

// console.log(Math.ceil(Math.random()*100000).toString(20));

// let radcol=Math.ceil(Math.random()*1000).toString(10)
// let h1=document.querySelector('h1')
// console.log(h1);
// h1.style.backgroundColor= `#${radcol}`;



//ARRAYS:Arrays is a collection of homoginious of elements or linear data structure which we used to store homoginious type of data.
 

// instead of storing multiple of values using arrays we can store multiple values in single varaible. typeof array is Object

//
// let arrnagu=[1, "HELLO", true, function a() { }, { }, undefined, null, Boolean];
// console.log(arrnagu);

// console.log(arrnagu[1]);

// let arrnagu1 = [];
// console.log(arrnagu1[0] = "Hi");

// console.log(arrnagu1[1] = 1);


//ARRAYS METHODS:
//1] PUSH(), 2] UNSHIPT(), 3] POP(), 4] SHIFT().

//1]PUSH():push() is adding the elements in an array from behind/last position of array. it's effects to the original length of array.
// let add=[100, "ROLEX", 3.00, 'A'];
// add.push("NAGU");
// console.log(add);

// 2] UNSHIPT(): unshift() is adding elements in an array at begining stage. it's effects for original length for array.
// var add1=[1, "NAGU", 505, "ROLEX", '$'];
// add1.unshift("First element");
// console.log(add1);

// 3] POP(): pop() is delete the elements in an array from behind/ last position.
// var del=["ROLEXXX", 4, 'a', true, undefined, null];
// del.pop(null);
// console.log(del);


// SHIFT(): shift() is delete the elements in an array from begining position.  
// var del1=["first element", 5, 'c', true, undefined, null];
// del1.shift(del1[0]);
// console.log(del1);



//1]SLICE METHOD: slice method except two values, it includes first values, And excludes last values. it will not effects the original length of array.

// let Slice_arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Slice_arr.slice(0, 5));


//2]SPLICE METHOD: splice method except three values 1) first values indicates index of an array, 
//               2)second values indicates how elements you wants to remove from array, 
//               3)third value is indicates elements adds to an array.


// let Splice_arr=[1,2,3,4,5];
// Splice_arr.splice(0, 2, "Rolex");
// console.log(Splice_arr);

//3] JOIN METHOD: it's convert arrays to String

// let Join_arr=[10,20,30,40,50];
// console.log(Join_arr.join("+"));

//4] CONCATE METHOD : it's merging two or more Arrays.

//  let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let arr1=["hello", 'a', 10, 20.30, 40, 50];
//  let arr2=[null, undefined, 'A', 10, 20, 30];
//  console.log(arr.concat(arr1, arr2));












//1] FILTER
//filter
// let v=[100, 200, 300, 400];
// let v1=v.filter(r=>{
//     return r>300;
// })
// console.log(v1);


//2] MAP
//Map

// let m=[100, 200, 300, 400]
// let r=m.map(a=>{
//     return a+20;
// })
// console.log(r);


// let m=[10, 20, 30, 40, 50];
// let m1=m.map(res=>{
//     return res-10;
// })
// console.log(m1);










//3] REDUCE
//reduce
// two arguments accu, val

// let c=[100, 200, 300, 400]
// let d=c.reduce((accu,val)=>{
//     return accu+val;
// })
// console.log(d);













