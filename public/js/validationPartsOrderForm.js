function validateForm() {
    const partNameInput = document.getElementById("partName");
    const mechanicInput = document.getElementById("mechanic_id");
    const amountInput = document.getElementById("amount");
    const statusInput = document.getElementById("status");


    const errorPartName = document.getElementById("errorPartName");
    const errorMechanic = document.getElementById("errorMechanic");
    const errorAmount = document.getElementById("errorAmount");
    const errorStatus=document.getElementById("errorStatus");


    const errorSummary = document.getElementById("errorSummary");

    resetErrors([partNameInput, mechanicInput, amountInput,statusInput], [errorPartName, errorMechanic, errorAmount,errorStatus], errorSummary);

    let valid = true;

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


    if (!checkRequired(partNameInput.value)) {
        valid = false;
        partNameInput.classList.add("error-input");
        errorPartName.innerText = error_emptyString;
    } else if (!checkTextLengthRange(partNameInput.value, 2, 60)) {
        valid = false;
        partNameInput.classList.add("error-input");
        errorPartName.innerText = error_stringLen2to60;

    }


    if (!checkRequired(mechanicInput.value)) {
        valid = false;
        mechanicInput.classList.add("error-input");
        errorMechanic.innerText = error_emptyString;
    }if(!checkNumber(mechanicInput.value)){
        valid = false;
        mechanicInput.classList.add("error-input");
        errorMechanic.innerText = error_notANumber;
    }


    if (!checkRequired(amountInput.value)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = error_emptyString;
    } else if (!checkNumber(amountInput.value)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = error_notANumber;
    } else if (!checkNumberRange(amountInput.value, 1, 1_000)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = error_number200to1000000;
    }




    if (!valid) {
        errorSummary.innerText = error_summary;
    }

    return valid;
}