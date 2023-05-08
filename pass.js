function randomPassword(){
    let displayPassword=document.getElementById('dispaly-password');
    let passwordlength=document.getElementById('password-length').value;
    let error=document.getElementById('error-info');
    let password='';
    let characters=

    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~{}[]:;?<>,/=';

    parseInt(passwordlength);
    if(passwordlength ==0){
        error.innerHTML='please select password length';
        error.style.padding='10px 15px';
        setTimeout(()=>{
            error.style.visibility="hidden";
            window.location.reload()
        },2000);
    }

    for(let i=0; i< passwordlength;i++){
        password +=characters[Math,floor(Math.random()*characters.length)];
    }
    displayPassword.value=password;
}