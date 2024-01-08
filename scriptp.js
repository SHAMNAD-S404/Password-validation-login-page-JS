function validate()
{
    var pass=document.getElementById('pass1');
    var lower=document.getElementById('lower');
    var upper=document.getElementById('upper');
    var num=document.getElementById('number');
    var spc_char=document.getElementById('special_char');
    var length=document.getElementById('length');
    //chek if pass value contain number
    if(pass.value.match(/[0-9]/)){//match is a function which matchs a regular experssion
        //password contain 0-9 then
       
        document.getElementById('number').style.display='none';
    }else{
      
        document.getElementById('number').style.display='block';
    }
    if(pass.value.match(/[A-Z]/)){
        document.getElementById('upper').style.display='none';
    }else{
        document.getElementById('upper').style.display='block';
    }
    if(pass.value.match(/[a-z]/)){
        document.getElementById('lower').style.display='none';
    }else{
        document.getElementById('lower').style.display='block';
    }
    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/)){
        document.getElementById('special_char').style.display='none';
    }else{
        document.getElementById('special_char').style.display='block';
    }
    if(pass.value.length <6){
        document.getElementById('length').style.display='block';
    }else{
        document.getElementById('length').style.display='none';
    }
}
function confirm()
{
    var pass1=document.getElementById('pass1').value;
    var pass2=document.getElementById('pass2').value;
    if(pass1==pass2){
        document.getElementById('message_alert').innerHTML='🗹 Password Matched';
        document.getElementById('message_alert').style.color='green'
        document.getElementById('create').disabled=false;
        document.getElementById('create').style.opacity=(1);
    }else{
        document.getElementById('message_alert').innerHTML='☒ Use same password';
        document.getElementById('message_alert').style.color='red'
        document.getElementById('create').disabled=true;
        document.getElementById('create').style.opacity=(0.2);
    }
}
function message_alert()
{
if(pass1=pass2){
    
        alert("Your response is submitted");
    }else{
        alert("Please fill the all field");
    }
}
