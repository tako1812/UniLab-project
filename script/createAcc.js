
const inputName = document.querySelector('.form-input-name');
const inputEmail = document.querySelector(".form-input-email");
const inputPassword = document.querySelector(".form-input-password");
const validName = document.querySelector(".valid-name");
const validEmail = document.querySelector(".valid-email");
const validPassword = document.querySelector(".valid-pass");
const btnLogin = document.querySelector(".btn-login");



//   Functions
const validSymbols = (input) => input.trim().length > 2;
const requiredInput = (inputs) => inputs.trim() === ""; 
const validPass  = (input) => input.length >= 8;
const validEmailEnd = (input) => input.trim().endsWith("@gmail.com"); 

const checkSymbolsName = function () {
    const name = inputName.value;
    
    if (validSymbols(name)) validName.classList.add("is-valid");
    if (!validSymbols(name)) validName.classList.add("not-valid");
}

const checkEmailValidation = function() {
    const email = inputEmail.value;
  
    if (validEmailEnd(email)) validEmail.classList.add("is-valid");
  
    if (!validEmailEnd(email)) {
      validEmail.classList.add("not-valid");
      return false;
    } 
    return true;
}

const checkPassValidation = function() {
    const password = inputPassword.value;
  
    if (validPass(password)) validPassword.classList.add("is-valid");
  
    if (!validPass(password)) {
        validPass.classList.add("not-valid");
      return false;
    } 
    return true;
}


btnLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    
    checkSymbolsName();
    checkEmailValidation();
    checkPassValidation();

});
