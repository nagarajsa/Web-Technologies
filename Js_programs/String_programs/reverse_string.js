//Write a JavaScript program to reverse a String

var str="JavaScript"
var rev=" "
for(var i=str.length-1; i>=0; i--)
{
   rev=rev+str.charAt(i)
}
console.log(rev);
