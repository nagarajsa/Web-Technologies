//Write a JavaScript Program to Count Consonents in given String
var str="Mother"
var count=0
for(var i=0; i<str.length; i++)
{
  let Char=str.charAt(i);
if(Char!='a' || Char!='e' || Char!='i' || Char!='o' || Char!='u' || Char!='A' || Char!='E' || Char!='I' || Char!='O' || Char!='U'  && Char>='a' && Char<='z')
  {
    count++;
  }
}
console.log("The count of consonents is: "+count);