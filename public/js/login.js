let emailAndPhoneInput=document.querySelector(".emailAndPhoneInput");//input tag for both email and phone number
let changePreference = document.querySelector(".loginChoice"); // link for login text
// let changePreferenceToEmail = document.querySelector(".loginWithEmail");// link for login with email
let logInPassword = document.querySelector(".loginPassword");// password input
let passwordVisibility = document.querySelector(".passwordVisibility");// show eye icon
// let hidePassword = document.querySelector(".passwordhide");// hide eye icon

// function to change preference of login
function changeLoginPreference(){
    console.log("j")
    if(emailAndPhoneInput.name=="email")
    {
        emailAndPhoneInput.name="phoneNumber";
        emailAndPhoneInput.placeholder="Phone Number";
        emailAndPhoneInput.type="text";
        emailAndPhoneInput.pattern="[0-9]{10}";
        emailAndPhoneInput.title="Please enter a valid Phone Number";  
        changePreference.innerHTML="Login using Email";
    }
    else
    {
        emailAndPhoneInput.name="email";
        emailAndPhoneInput.placeholder="Email";
        emailAndPhoneInput.type="email";
        emailAndPhoneInput.pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
        emailAndPhoneInput.title="Please enter valid Email address";  
        changePreference.innerHTML="Login using Phone Number";
    }
    // if(phoneInput.style.display == "none"|| phoneInput.style.display== ""){
        // console.log("jai Shankar")
        // emailAndPhoneInput.removeAttribute("name");
        // emailAndPhoneInput.removeAttribute("placeholder");
        // emailAndPhoneInput.removeAttribute("pattern");
        // emailInput.style.display = "none";
        // changePreferenceToPhone.style.display = "none";
        // phoneInput.style.display = "block";
        // phoneInput.setAttribute("required","");
        // emailInput.required = flase;
        // // changePreferenceToEmail.style.display = "block";
        // emailAndPhoneInput.name = "Email";
        // emailAndPhoneInput.setAttribute("placeholder","Email");
        // console.log(emailAndPhoneInput.name);
        
    // }
    // else{
    //     console.log("jai")
    //     emailInput.style.display = "block";
    //     // phoneInput.required = false;
    //     // emailInput.required = true;
    //     changePreferenceToPhone.style.display = "block";
    //     phoneInput.style.display = "none";
    //     changePreferenceToEmail.style.display = "none";
    // }
}
// changeLoginPreference();

// function to show and hide the password
function changePasswordVisibility(){
    if(passwordVisibility.style.backgroundImage =='url("../images/view.png")'||passwordVisibility.style.backgroundImage ==""||passwordVisibility.style.backgroundImage=='url("./static/images/view.png")'){
        passwordVisibility.style.backgroundImage='url("./static/images/hide.png")';
        logInPassword.type="text";
    }
    else
    {
        passwordVisibility.style.backgroundImage='url("./static/images/view.png")';
        logInPassword.type="password";
    }
    // if(hidePassword.style.display == "none"|| hidePassword.style.display == ""){
    //     showPassword.style.display = "none";
    //     logInPassword.type = "text";
    //     console.log(hidePassword.style.display);
    //     hidePassword.style.display = "block";
    // }
    // else{
    //     showPassword.style.display = "block";
    //     logInPassword.type = "password";
    //     hidePassword.style.display = "none";

    // }
}


