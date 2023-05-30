//Write a JavaScript Program to Count vowels to given a string

var str="Father"
var count=0
for(var i=0; i<str.length; i++)
{
  let Char=str.charAt(i);
if(Char=='a' || Char=='e' || Char=='i' || Char=='o' || Char=='u' || Char=='A' || Char=='E' || Char=='I' || Char=='O' || Char=='U')
  {
    count++;
  }
}
console.log("The count of vowels is: "+count);