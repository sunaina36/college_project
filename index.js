let emailInput = document.querySelector(".emailInput");
let phoneInput = document.querySelector(".changeToPhoneNumber");
let changePreferenceToPhone = document.querySelector(".loginWithPhoneNumber");
let changePreferenceToEmail = document.querySelector(".loginWithEmail");
function changeLoginPreference(){
    console.log("j")
    if(phoneInput.style.display == "none"|| phoneInput.style.display== ""){
        console.log("jai Shankar")
        emailInput.style.display = "none";
        changePreferenceToPhone.style.display = "none";
        phoneInput.style.display = "block";
        changePreferenceToEmail.style.display = "block";
    }
    else{
        console.log("jai")
        emailInput.style.display = "block";
        changePreferenceToPhone.style.display = "block";
        phoneInput.style.display = "none";
        changePreferenceToEmail.style.display = "none";
    }
}
let logInPassword = document.querySelector(".loginPassword");
let showPassword = document.querySelector(".passwordShow");
let hidePassword = document.querySelector(".passwordhide");
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
