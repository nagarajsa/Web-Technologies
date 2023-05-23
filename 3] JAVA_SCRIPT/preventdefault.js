// var f=document.querySelector('form')
// f.addEventListener('submit', (e)=>{
// let uname=document.getElementById('un').value;
// let pawd=document.getElementById('pd').value; 
// e.preventDefault()
// console.log(uname,pawd);   
// })


//Keys Event
//1]keydown 2]keyup 3]keypress

//1]keydown
// let text1=document.getElementById('enter')
// text1.addEventListener('keydown',()=>{
//     console.log("keydown");
// })

//2]keyup
// let text2=document.getElementById('enter')
// text2.addEventListener('keyup',()=>{
//     console.log("keyup");
// })

//3]keypress
// let text3=document.getElementById('enter')
// text3.addEventListener('keypress',()=>{
//     console.log("keypress");
// })


//color color
// let col=document.getElementById('enter')
// col.addEventListener('keydown',()=>{
//     let radcol=Math.floor(Math.random()*10000).toString(16);
//     console.log(radcol);
//     document.body.style.backgroundColor=`#${radcol}`
// })


//mouseover()
let m=document.querySelector('button')
m.addEventListener('mouseover', ()=>{
    m.style.height="100px"
    m.style.width="200px"
    m.style.color="red"
    m.style.backgroundColor='silver'
    m.style.transition="5s"
    m.style.fontSize="25px"
})