//Write a JavaScript Program to check the given String is Palindrome or Not

var str="appa"
var rev=""
for(var i=str.length-1; i>=0; i--)
{
   rev=rev+str.charAt(i)
}
if(str==rev)
{
    console.log("Given String is Palindrome");
}
else
{
    console.log("Given String is Not Palindrome");  
}