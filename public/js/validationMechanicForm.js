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

    resetErrors([firstNameInput, lastNameInput, salaryInput,passwordInput], [errorFirstName, errorLastName, errorSalary,errorPasswordm], errorSummary);

    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "The field is required.";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "The field should contain 2 to 60 characters.";

    }


    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "The field is required.";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "The field should contain 2 to 60 characters.";

    }


    if (!checkRequired(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "The field is required.";
    } else if (!checkNumber(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "This field must be a number";
    } else if (!checkNumberRange(salaryInput.value, 200, 1_000_000)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "This field must be between 200 and 1,000,000";
    }

    if(!checkRequired(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText="The field is required.";
    }else if(!checkPhone(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText="This field should be a phone number."
    }

    if(!checkRequired(passwordInput.value)){
        valid=false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText="The field is required.";
    }

    if (!valid) {
        errorSummary.innerText = "Form contains errors."
    }

    return valid;
}