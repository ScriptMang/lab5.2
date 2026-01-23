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
    const username = event.target;
    console.log(username.value);
    if (username.validity.valueMissing){
        usernameInput.setCustomValidity("Username field can't be empty, provide a username");
    }else {
        usernameInput.setCustomValidity('');
        localStorage.setItem('username', usernameInput.value);
    }
    usernameErr.textContent = usernameInput.validationMessage;
});

emailInput.addEventListener("change", (event)=>{
    const email = event.target;
     if (email.validity.valueMissing){
        emailInput.setCustomValidity("The email field can't be empty, enter an email with a min length of 8");
    } else {
        emailInput.setCustomValidity('');
        localStorage.setItem('email', emailInput.value);
    }
    emailErr.textContent = emailInput.validationMessage;
});

function atLeastOneUpper(str){
    for (let letter of str) {
        console.log(`at least one upper letter: ${letter}`);
        if (!isNaN(parseInt(letter))) {
            continue;
        }
        if ( letter === letter.toUpperCase()) {
            console.log(`Found a match uppercase letter ${letter}`);
            return true;    
        }
    }
    return false;
}

function atLeastOneDigit(str){
    for (let letter of str) {
        const digit = parseInt(letter);
        console.log(`at least one digit: ${digit}`);
        if (!isNaN(digit)){
             console.log(`This digit ${letter} is  a number`);
            return true
        } 
    }
    return false;
}

const newPswd = [];
pswdInput.addEventListener("change", (event) => {
    // make sure the new pswd list is empty on re-entry
    if (newPswd.length === 1) {
       newPswd.splice(0,1);
    }

    const pswd = event.target.value;
    const isThereAtLeastUpperCaseLetter = atLeastOneUpper(pswd);
    const isThereAtLeastDigit = atLeastOneDigit(pswd); 
     if (pswdInput.validity.valueMissing || pswdInput.validity.tooShort  || !isThereAtLeastUpperCaseLetter || !isThereAtLeastDigit) {
        pswdInput.setCustomValidity('Password must be at least 8 characters long,  a lowercase letter, and a number.');
    }  else {
        pswdInput.setCustomValidity('');
    }
    pswdErr.textContent = pswdInput.validationMessage;
     if (pswdInput.validationMessage === "") {
        newPswd.push(pswd);
    }
});


confirmPswdInput.addEventListener("change", (event)=>{
    const confirmPswd = event.target;
    if (confirmPswd.value !== newPswd[0]) {
         confirmPswdInput.setCustomValidity('Passwords do not match, please retype.');
         confirmPswdErr.textContent = confirmPswdInput.validationMessage;
    } else {
        confirmPswdInput.setCustomValidity('');
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


function isvalidErrMsgEmpty(inputField) {
    return inputField.validationMessage === '';
}

function clearInputFieldsAfterSubmit(inputFields) {
    for (let inputField of inputFields) {
        inputField.value = "";
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputFields = [usernameInput, emailInput, pswdInput, confirmPswdInput]
    let atLeastOneValidErrMsg = false;
    for(let inputField of inputFields) {
        if (!isvalidErrMsgEmpty(inputField)) {
            atLeastOneValidErrMsg = true;
        }
    }

    if (!atLeastOneValidErrMsg) {
        alert("Form sucessfully submitted");
        clearInputFieldsAfterSubmit(inputFields);
    }
});