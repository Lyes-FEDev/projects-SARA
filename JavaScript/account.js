const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener('click', ()=> {
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
})