
//Local Storage
//1]setItem 2]getItem  3]removeItem 4]Clear

//1]store data
// var l1=localStorage.setItem("ID", 1);
// var l1=localStorage.setItem("NAME", "ROLEX");

// //2]getting back to data.
// var data=localStorage.getItem("ID");
// console.log(data);

// var data=localStorage.getItem("NAME");
// console.log(data);

// //3]delete data from local storage. use removeItem
//  var re=localStorage.removeItem("ID");
//  console.log(re);


//  //4] delete all from local Storage use clear
// var cl=localStorage.clear();
// console.log(cl);



//Session Storage

//1]setItem 2]getItem  3]removeItem 4]Clear

//1]setItem
var s=sessionStorage.setItem("ID", 1);
var s1=sessionStorage.setItem("NAME", "ROLEX1")


//2]getItem
var data= sessionStorage.getItem("ID");
console.log(data);
var data1= sessionStorage.getItem("NAME");
console.log(data1);


//3]removeItem
var re=sessionStorage.removeItem("ID")

//4]clear
var cl=sessionStorage.clear();
