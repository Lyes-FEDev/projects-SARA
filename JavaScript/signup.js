const password = document.getElementById("pswd");
const eye = document.getElementById('eyeIcon');

eye.addEventListener('click', ()=> {
    if(password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})