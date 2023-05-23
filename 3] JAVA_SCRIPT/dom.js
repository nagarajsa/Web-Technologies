//BOM : BROWSER OBJECT MODEL
//window:
//1]SCREEN, 2]NAVIGATOR, 3]HISTORY, 4]LOCATION, 5]DOCUMENT

//1]SCREEN
// console.log(window);
// console.log(window.screen);
// console.log(window.screen.availHeight);
// console.log(window.screen.availWidth);

//2]NAVIGATOR
// console.log(window);
// console.log(window.navigator);
// console.log(window.navigator.cookieEnabled);

//3]HISTORY
// console.log(window);
// console.log(window.history);
// console.log(window.history.back());
// console.log(window.history.forward());


//4]LOCATION
// console.log(window);
// console.log(window.location);
// console.log(window.Location.href="www.google.com");













//DOM: DOCUMENT OBJECT MODEL

//  let n=document.head;  // it shows the head inside all elements.
//  console.log(n);

// var b=document.body;
// console.log(b);
  
//  var  r=document.title;
//  console.log(r);


//  let y=document;
//  console.log(y);


//DOM METHOD'S
//1]getelementbyID : getelementbyID is an method which target's a particular element that element is targeted by Id.
//2]getelementbyClassName : getelementbyClassName is an method it's target's the Class inside the class all elements can make style it.
//3]getelementbyTagName : getelementbyTagName is an method. which is used to targets by taking html elements tag name. it returns the answer within in html collection.
//4]query Selector : query Selector is an method it's target's the first html elements and make style it.
//5]query SelectorAll: query SelectorAll is an method it's target's the  html All elements and make style it.

//1]getelementbyID :
  //  let t=document.getElementById('test')
  //   t.style.backgroundColor="blue"
  //   t.style.textAlign="center"
  //   t.style.color="orange"
  //   console.log(t);
 


      //if you want to change the text name by using innerHTML we can rename the text.
      // var t1=document.getElementById("test").innerHTML="My students";
      // console.log(t1);





  //2]getelementbyClassName : getelementbyClassName is a method which is used to it's targets particular class and make it style.
      
      // let tar=document.getElementsByClassName('target')
      // tar[0].style.backgroundColor="Orange"  
      // tar[1].style.backgroundColor="black"
      // tar[2].style.backgroundColor="Orange"
      // tar[3].style.backgroundColor="black"
      // tar[4].style.backgroundColor="Orange"

      // console.log(tar);




     // 3]getelementbyTagName
          // var bar=document.getElementsByTagName('tag')
          // console.log(bar);

      //4]query Selector
      // var t=document.querySelector
      // console.log(t);

     // 5]query SelectorAll:
    //  let all=document.querySelectorAll
    //  console.log(all);









    // 6]getElementsByName: DOM method it is used in form it's targets the name and make it style.
// var name1=document.getElementsByName('Username')
// name1[0].style.backgroundColor="lightblue"
// console.log(name1);

// var name2=document.getElementsByName('Password')
// name2[0].style.backgroundColor="lightblue"
// console.log(name2);



///7]creatingHTML Tag's by using createElement method
    //  var head2=document.createElement('h2')
    //  document.body.append(head2)
    //  head2.innerHTML="Heading Tag2"
    //  console.log(head2);



    // var par=document.createElement('p')
    // document.body.append(par)
    // par.innerHTML="This is Paragraph Tag"
    // console.log(par);



   // DOM EVENTS:
   //1]Onclick Event

   //1 way
// function test()
// {
//     document.body.style.background="orange"
//     document.body.style.textAlign="center"
//     document.body.style.fontFamily="Arial"
//     document.body.style.fontSize="10px"
// }



//2nd way
// let d=document.querySelector('button')
// console.log(d);
// d.onclick=()=>
// {
//     document.body.style.background='green'
// }


//3rd way
// var ve=document.querySelector('button')
// ve.addEventListener(onclick=()=>
// {
//     document.body.style.background="silver"

// })
// console.log(ve);

//



//Hide() Text and Show() Text
     
// function hide()
// {
//     let h=document.getElementById('test')
//     h.style.display='none';

// }

// function show()
// {
//     let h1=document.getElementById('test')
//     // h1.style.display='block';
//     h1.style.display="block"
// }


// var btn=document.querySelector('button')
// btn.addEventListener("click",()=>
// {
//     console.log("I am here..! ")
// }
// )

// const a=10;

// let b=10;
//  b=20;
//  console.log(b);



// function a(){
//    let obj={
//     name:"nagaraj",
//     age:20,
//    } 
// }
// a();
// console.log(a);











