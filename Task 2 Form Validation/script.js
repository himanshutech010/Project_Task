var firstnameError = document.getElementById('first-name-error');
var lastnameError = document.getElementById('last-name-error');
var birthError = document.getElementById('birth-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var recheckEmailError = document.getElementById('recheck-email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var passwordError = document.getElementById('password-error');
var recheckPasswordError = document.getElementById('recheck-password-error');



function validatefirstName(){
    var name = document.getElementById('contact-first-name').value;

    if(name.length == 0){
        firstnameError.innerHTML = 'Name is required';
        return false;
    }
    if(name.length>20){
        firstnameError.innerHTML = 'Name should be less than or equal to 20 characters';
        return false;
    }

    if(!name.match(/^[A-Za-z]+$/)){
        firstnameError.innerHTML = 'Write First Name';
        return false;
    }

    firstnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validatelastName(){
    var name = document.getElementById('contact-last-name').value;

    if(name.length == 0){
        lastnameError.innerHTML = 'Name is required';
        return false;
    }
    if(name.length>20){
        lastnameError.innerHTML = 'Name should be less than or equal to 20 characters';
        return false;
    }

    if(!name.match(/^[A-Za-z]+$/)){
        lastnameError.innerHTML = 'Write Last Name';
        return false;
    }

    lastnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateDOB() {
    var dob = document.getElementById('contact-birth').value;
    return true;
}


function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function recheckEmail(){
    var email = document.getElementById('contact-email').value;
    var recheckEmail = document.getElementById('contact-recheck-email').value;

    if (recheckEmail.length === 0) {
        recheckEmailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        recheckEmailError.innerHTML = 'Invalid Email';
        return false;
    }

    if (email !== recheckEmail) {
        recheckEmailError.innerHTML = 'Emails do not match';
        return false;
    }

    recheckEmailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}




function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }

    if(password.length < 8){
        passwordError.innerHTML = 'Password should be at least 8 characters long';
        return false;
    }

    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function recheckPassword() {
    var password = document.getElementById('contact-password').value;
    var recheckPassword = document.getElementById('contact-recheck-password').value;

    if (recheckPassword.length < 8) {
        recheckPasswordError.innerHTML = 'Password should be at least 8 characters long';
        return false;
    }

    if (recheckPassword.length == 0) {
        recheckPasswordError.innerHTML = 'Password is required';
        return false;
    }

    if (password !== recheckPassword) {
        recheckPasswordError.innerHTML = 'Passwords do not match';
        return false;
    }

    recheckPasswordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateDOB() || !validateEmail() || !validatePassword() || !recheckPassword()){
        submitError.style.display = 'block';
        
        submitError.innerHTML = 'Please fix error to submit';
        
        setTimeout(function(){submitError.style.display = 'none';},3000);
        
        return false;

    }
    alert('Form submitted successfully!');
        return true;

}
