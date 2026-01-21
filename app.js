const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const pswdInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const confirmPswdInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');

const usernameErr = document.getElementById('usernameError');
const pswdErr = document.getElementById('passwordError');
const emailErr = document.getElementById('emailError');
const confirmPswdErr = document.getElementById('confirmPasswordError');



usernameInput.addEventListener("change", (event)=>{
    const username = event.target.value;
    console.log(username);
    if (username === ''){
        usernameInput.setCustomValidity("Username field can't be empty, provide a username");
    }else {
        usernameInput.setCustomValidity('');
        localStorage.setItem('username', usernameInput.value);
    }
    usernameErr.textContent = usernameInput.validationMessage;

});

emailInput.addEventListener("change", (event)=>{
    console.log(event.target.value);
    localStorage.setItem('email', emailInput.value);
});

window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    if (savedUsername){
        usernameInput.value = savedUsername;
    }  
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});