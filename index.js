let emailInput = document.querySelector(".emailInput");// email input
let phoneInput = document.querySelector(".changeToPhoneNumber");// phone input
let changePreferenceToPhone = document.querySelector(".loginWithPhoneNumber"); // link for login with phone number
let changePreferenceToEmail = document.querySelector(".loginWithEmail");// link for login with email
let logInPassword = document.querySelector(".loginPassword");// password input
let showPassword = document.querySelector(".passwordShow");// show eye icon
let hidePassword = document.querySelector(".passwordhide");// hide eye icon

// function to change preference of login
function changeLoginPreference(){
    console.log("j")
    if(phoneInput.style.display == "none"|| phoneInput.style.display== ""){
        // console.log("jai Shankar")
        emailInput.style.display = "none";
        changePreferenceToPhone.style.display = "none";
        phoneInput.style.display = "block";
        // phoneInput.setAttribute("required","");
        // emailInput.required = flase;
        changePreferenceToEmail.style.display = "block";
    }
    else{
        console.log("jai")
        emailInput.style.display = "block";
        // phoneInput.required = false;
        // emailInput.required = true;
        changePreferenceToPhone.style.display = "block";
        phoneInput.style.display = "none";
        changePreferenceToEmail.style.display = "none";
    }
}

// function to show and hide the password
function changePasswordVisibility(){
    if(hidePassword.style.display == "none"|| hidePassword.style.display == ""){
        showPassword.style.display = "none";
        logInPassword.type = "text";
        console.log(hidePassword.style.display);
        hidePassword.style.display = "block";
    }
    else{
        showPassword.style.display = "block";
        logInPassword.type = "password";
        hidePassword.style.display = "none";

    }
}

function emailValidation(){
    
}
