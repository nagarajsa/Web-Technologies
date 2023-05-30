//Write a JavaScript Program to Prime Number
let num=7
var flag=true
for(let i=2; i<=num/2; i++)
{
    if(num%i==0)
    {
        flag=false
        break;
    }
}
if(flag==true)
{
    console.log("It is Prime Number");
}
else
{
    console.log("It is Not Prime Number");
}