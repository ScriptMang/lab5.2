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
    const email = event.target.value
     if (email === ''){
        emailInput.setCustomValidity("The email field can't be empty, enter an email with a min length of 8");
    }else {
        emailInput.setCustomValidity('');
        localStorage.setItem('email', emailInput.value);
    }
    emailErr.textContent = emailInput.validationMessage;
});

function atLeastOneUpper(str){
    for (let letter of str) {
        if ( letter === letter.toUpperCase()) {
            return true;    
        }
    }
    return false;
}

function atLeastOneDigit(str){
    for (let letter of str) {
         const digit = parseInt(letter);
         console.log(letter);
         console.log(digit);
         if (digit === NaN){
            continue;
         } else if (letter === '\0') {
            continue;
         }
         return true
    }
    return false;
}

pswdInput.addEventListener("change", (event) =>{
    const pswd = event.target.value;
    if (pswd.length < 8) {
        console.log("Password is less than 8 chars");
    }
    if (!atLeastOneUpper(pswd)) {
        console.log("Password is missing a capital letter");
    }
    if (!atLeastOneDigit(pswd)) {
         console.log("Password is missing a number");
    }
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