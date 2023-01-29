function validateForm() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const salaryInput = document.getElementById("salary");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    const errorFirstName = document.getElementById("errorFirstName");
    const errorLastName = document.getElementById("errorLastName");
    const errorSalary = document.getElementById("errorSalary");
    const errorPhone=document.getElementById("errorPhone");
    const errorPassword=document.getElementById("errorPassword");

    const errorSummary = document.getElementById("errorSummary");

    resetErrors([firstNameInput, lastNameInput, salaryInput,phoneInput,passwordInput], [errorFirstName, errorLastName, errorSalary,errorPhone,errorPassword], errorSummary);

    const error_emptyString = document.getElementById('error-emptyString').innerText;
    const error_stringLen2to60 = document.getElementById('error-stringLen2to60').innerText;
    const error_stringLen2to10 = document.getElementById('error-stringLen2to10').innerText;
    const error_notAPhone = document.getElementById('error-notAPhone').innerText;
    const error_notANumber = document.getElementById('error-notANumber').innerText;
    const error_number200to1000000 = document.getElementById('error-number200to1000000').innerText;
    const error_notADate = document.getElementById('error-notADate').innerText;
    const error_notATime = document.getElementById('error-notATime').innerText;
    const error_number0to100 = document.getElementById('error-number0to100').innerText;
    const error_number1to1000 = document.getElementById('error-number1to1000').innerText;
    const error_summary = document.getElementById('error-summary').innerText;


    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = error_emptyString;
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = error_stringLen2to60;

    }


    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = error_emptyString;
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = error_stringLen2to60;

    }


    if (!checkRequired(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = error_emptyString;
    } else if (!checkNumber(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "This field must be a number";
    } else if (!checkNumberRange(salaryInput.value, 200, 1_000_000)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = error_number200to1000000;
    }

    if(!checkRequired(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText=error_emptyString;
    }else if(!checkPhone(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText=error_notAPhone
    }

    if(!checkRequired(passwordInput.value)){
        valid=false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText=error_emptyString;
    }else if (!checkTextLengthRange(passwordInput.value, 2, 60)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = error_stringLen2to60;

    }

    if (!valid) {
        errorSummary.innerText = error_summary;
    }

    return valid;
}