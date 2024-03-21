
function createaccount(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const term= document.getElementById('alert').checked;
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
    document.getElementById('email-part').innerHTML='! Enter the correct e-mail'   
    return;
    }
    
    document.getElementById('email-part').innerHTML='';
    
    if(password.length < 8){
        document.getElementById('password-part').innerHTML='!Enter altleast 8 digit password'
        return;
    }
    document.getElementById('password-part').innerHTML=''
    if(!term){
        alert('Please accept the terms and condition')
        return
    }
         newdata={
        name: name,
        email:email,
        password: password
    }
    const userdatajson = JSON.stringify(newdata)
    localStorage.setItem("newdata", userdatajson)
     alert('your account has created')
    }