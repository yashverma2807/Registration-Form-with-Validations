// var first = document.getElementById('fname');                    -> Done
// var last = document.getElementById('lname');                     -> Done
// var gender = document.getElementById('gender');                  -> Done
// var email = document.getElementById('email');                    -> Done
// var phone = document.getElementById('phone');                    -> Done
// var address = document.getElementById('address');                -> Done
// var password = document.getElementById('password');              -> Done
// var confirmPassword = document.getElementById('cpassword');      -> Done

// First Name Validation
var firstName = document.getElementById("fname");

var firstNameValidation = () => {
    firstNameValue = firstName.value.trim();
    validFirstName = /^([A-Z][a-z]*)(?!.*([A-Za-z])\2{2})$/;
    firstNameErr = document.getElementById('first-name-err');
    if (firstNameValue == "") {
        firstNameErr.innerHTML = "First Name cannot be empty."
        firstNameErr.style.color = "red";
        return false;
    }
    else if (!firstNameValue.match(validFirstName)) {
        firstNameErr.innerHTML = "First letter should be capital, spaces not allowed, and more than 2 repeating characters are not allowed. ";
        firstNameErr.style.color = "red";
        return false;
    }
    else if (/(.)\1\1/.test(firstNameValue)) {
        firstNameErr.innerHTML = "More than 2 repeating characters are not allowed.";
        firstNameErr.style.color = "red";
        return false;
    } else {
        firstNameErr.innerHTML = "";
        return true;
    }
}

firstName.oninput = () => {
    firstNameValidation();
}

// Last Name Validation
var lastName = document.getElementById("lname");

var lastNameValidation = () => {
    lastNameValue = lastName.value.trim();
    validLastName = /^[A-Z][a-z]*(?:(\w)(?!\1{2}))*$/;
    lastNameErr = document.getElementById('last-name-err');
    if (lastNameValue == "") {
        lastNameErr.innerHTML = "Last Name cannot be empty."
        lastNameErr.style.color = "red";
        return false;
    }
    else if (!lastNameValue.match(validLastName)) {
        lastNameErr.innerHTML = "First letter should be capital, spaces not allowed, and more than 2 repeating characters are not allowed. ";
        lastNameErr.style.color = "red";
        return false;
    }
    else if (/(.)\1\1/.test(lastNameValue)) {
        lastNameErr.innerHTML = "More than 2 repeating characters are not allowed.";
        lastNameErr.style.color = "red";
        return false;
    } else {
        lastNameErr.innerHTML = "";
        return true;
    }
};

lastName.oninput = () => {
    lastNameValidation();
}


// Email Validation
var emailAddress = document.getElementById("email");
let submittedEmailAddresses = [];
var emailAddressValidation = () => {
    emailAddressValue = emailAddress.value.trim();
    validEmailAddress = /^[a-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailAddressErr = document.getElementById('emailerr');

    if (emailAddressValue == "") {
        emailAddressErr.innerHTML = "Email Address cannot be empty.";
        emailAddressErr.style.color = "red";
        return false;
    } else if (emailAddressValue.length < 5 || emailAddressValue.length > 50) {
        emailAddressErr.innerHTML = "Email Address must be between 5 and 50 characters.";
        emailAddressErr.style.color = "red";
        return false;
    } else if (/\s/.test(emailAddressValue)) {
        emailAddressErr.innerHTML = "Email Address cannot contain white spaces.";
        emailAddressErr.style.color = "red";
        return false;
    } else if (!validEmailAddress.test(emailAddressValue)) {
        emailAddressErr.innerHTML = "Email Address must be in valid format with @ symbol.";
        emailAddressErr.style.color = "red";
        return false;
    } else if (submittedEmailAddresses.includes(emailAddressValue)) {
        emailAddressErr.innerHTML = "Email Address cannot have repeated extensions.";
        emailAddressErr.style.color = "red";
        return true;
    } else if (/[!#$%&'*+/=?^_`{|}~]/.test(emailAddressValue)) {
        emailAddressErr.innerHTML = "Email Address cannot contain disallowed special characters.";
        emailAddressErr.style.color = "red";
        return false;
    } else {
        // Add the email address to the submittedEmailAddresses array
        submittedEmailAddresses.push(emailAddressValue);
        emailAddressErr.innerHTML = "";
        // emailAddressErr.style.color = "green";
        return true;
    }
}

// Create an array to keep track of previously submitted email addresses
// let submittedEmailAddresses = [];
// var emailAddressValidation = () => {
//     emailAddressValue = emailAddress.value.trim();
//     validEmailAddress = /^[a-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     emailAddressErr = document.getElementById('emailerr');

//     if (emailAddressValue == "") {
//         emailAddressErr.innerHTML = "Email Address cannot be empty.";
//         emailAddressErr.style.color = "red";
//         return false;
//     } else if (/\s/.test(emailAddressValue)) {
//         emailAddressErr.innerHTML = "Email Address cannot contain white spaces.";
//         emailAddressErr.style.color = "red";
//         return false;
//     } else if (!validEmailAddress.test(emailAddressValue)) {
//         emailAddressErr.innerHTML = "Email Address must be in valid format with @ symbol.";
//         emailAddressErr.style.color = "red";
//         return false;
//     } else if (submittedEmailAddresses.includes(emailAddressValue)) {
//         emailAddressErr.innerHTML = "Email Address cannot have repeated extensions.";
//         emailAddressErr.style.color = "red";
//         return false;
//     } else {
//         // Add the email address to the submittedEmailAddresses array
//         submittedEmailAddresses.push(emailAddressValue);
//         emailAddressErr.innerHTML = "Email Address is valid.";
//         emailAddressErr.style.color = "green";
//         return true;
//     }
// }

emailAddress.oninput = () => {
    emailAddressValidation();
}


// Address
var address = document.getElementById("address");

var addressValidation = function () {
    addressValue = address.value.trim();
    validAddress = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
    // 3344 W Alameda Avenue, Lakewood, CO 80222 - Example
    addressErr = document.getElementById('addresserr')
    if (addressValue == "") {
        addressErr.innerHTML = "Address cannot be empty.";
        addresserr.style.color = "red";
    }
    else if (!addressValue.match(validAddress)) {
        addressErr.innerHTML = "Example - 3344 W Alameda Avenue, Lakewood, CO 80222."
        addressErr.style.color = "red";
    }
    else {
        addresserr.innerHTML = "";
        return true;
    }
}
address.oninput = () => {
    addressValidation();
}
// Phone Code
const phoneInput = document.getElementById('phone');
const codeSelect = document.getElementById('code');
const indiaPattern = "^[789]\\d{9}$";
const chinaPattern = "^1\\d{10}$";
const usaPattern = "^\\d{10}$";

codeSelect.onchange = () => {
    const selectedCode = codeSelect.value;
    switch (selectedCode) {
        case 'india':
            phoneInput.pattern = indiaPattern;
            phoneInput.maxLength = 10;
            break;
        case 'china':
            phoneInput.pattern = chinaPattern;
            phoneInput.maxLength = 11;
            break;
        case 'usa':
            phoneInput.pattern = usaPattern;
            phoneInput.maxLength = 10;
            break;
        default:
            phoneInput.pattern = "\\d*";
            phoneInput.maxLength = 10;
            break;
    }
    phoneInput.value = '';
};



// Phone No. Validation
var phoneNumber = document.getElementById("phone");

var phoneNumberValidation = () => {
    phoneNumberValue = phoneNumber.value.trim();
    validPhoneNumber = /^[1-9]\d{9}$/;
    phoneNumberErr = document.getElementById('phonenumbererr');
    if (phoneNumberValue == "") {
        phoneNumberErr.innerHTML = "Phone Number is required.";
        phoneNumberErr.style.color = "red";
        return false;
    } else if (phoneNumberValue.length === 11 && phoneNumberValue.charAt(0) === "0") {
        phoneNumberErr.innerHTML = "Phone Number cannot start with zero.";
        phoneNumberErr.style.color = "red";
        return false;
    } else if (!validPhoneNumber.test(phoneNumberValue)) {
        phoneNumberErr.innerHTML = "Phone Number must be a 10-digit number and cannot start with zero.";
        phoneNumberErr.style.color = "red";
        return false;
    } 
    else {
        phoneNumberErr.innerHTML = "";
        return true;
    }
}

// var phoneNumberValidation = () => {
//     phoneNumberValue = phoneNumber.value.trim();
//     validPhoneNumber = /^[1-9]\d{9}$/;
//     phoneNumberErr = document.getElementById('phonenumbererr');
//     if (phoneNumberValue == "") {
//         phoneNumberErr.innerHTML = "Phone Number is required.";
//         phoneNumberErr.style.color = "red";
//         return false;
//     } else if (!validPhoneNumber.test(phoneNumberValue)) {
//         phoneNumberErr.innerHTML = "Phone Number must be a 10-digit number and cannot start with zero.";
//         phoneNumberErr.style.color = "red";
//         return false;
//     } 
//     else {
//         phoneNumberErr.innerHTML = "";
//         return true;
//     }
// }


phoneNumber.oninput = () => {
    phoneNumber.value = phoneNumber.value.replace(/[^\d]/g, ''); // removes non-numeric characters
    phoneNumberValidation();
}



// Password Validation
var password = document.getElementById("password");

var passwordValidation = () => {
    passwordValue = password.value.trim();
    validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    passwordErr = document.getElementById('passworderr');
    if (passwordValue == "") {
        passwordErr.innerHTML = "Password is required.";
        passworderr.style.color = "red";
    } else if (!validPassword.test(passwordValue)) {
        passwordErr.innerHTML = "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters.";
        passworderr.style.color = "red";

    }
    else {
        passwordErr.innerHTML = "";
        return true;
    }
}
password.oninput = () => {
    passwordValidation();
    confirmPasswordValidation();
}
// Show Password
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


//Confirm Password Validation
var confirmPassword = document.getElementById("cpassword");

var confirmPasswordValidation = () => {
    confirmPasswordValue = confirmPassword.value.trim();

    confirmPasswordErr = document.getElementById('confirmpassworderr');
    if (confirmPasswordValue == "") {
        confirmPasswordErr.innerHTML = "Confirm Password is required.";
        confirmpassworderr.style.color = "red";
    }
    else if (confirmPasswordValue != password.value) {
        confirmPasswordErr.innerHTML = "Confirm Password does not match.";
        confirmpassworderr.style.color = "red";
    }
    else {
        confirmPasswordErr.innerHTML = "";
        return true;
    }
}
confirmPassword.oninput = () => {
    confirmPasswordValidation();

}

// Registration Validation
document.getElementById("registrationForm").onsubmit = () => {


    firstNameValidation();
    lastNameValidation();
    emailAddressValidation();
    addressValidation();
    phoneNumberValidation();
    passwordValidation();
    confirmPasswordValidation();

    if (firstNameValidation() == true &&
        lastNameValidation() == true &&
        emailAddressValidation() == true &&
        addressValidation() == true &&
        phoneNumberValidation() == true &&
        passwordValidation() == true &&
        confirmPasswordValidation() == true) {
        return alert("Form Registered Successfully.");
    }
    else {
        return false;
    }
}