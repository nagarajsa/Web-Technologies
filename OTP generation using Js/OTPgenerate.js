function generateOTP(){
    var digits= "0123456789";
    let OTP='';

    for(let i=0; i<4; i++)
    {
        OTP += digits[Math.floor(Math.random()*10)]
    }

    var temp=document.querySelector('.test');
    temp.innerHTML=OTP;
}


function success()
{
  alert("form submitted suceessfuly...!")
}
