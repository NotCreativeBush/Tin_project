function validateForm() {
    const manufacturerInput = document.getElementById("manufacturer");
    const modelInput = document.getElementById("model");
    const platesInput = document.getElementById("plates");
    const phoneInput = document.getElementById("phone");
    const customerNameInput = document.getElementById("customerName");

    const errorManufacturer = document.getElementById("errorManufacturer");
    const errorModel = document.getElementById("errorModel");
    const errorPlates = document.getElementById("errorPlates");
    const errorPhone = document.getElementById("errorPhone");
    const errorCustomerName = document.getElementById("errorCustomerName");

    const errorSummary = document.getElementById("errorSummary");

    resetErrors([manufacturerInput, modelInput, platesInput, phoneInput, customerNameInput], [errorManufacturer, errorModel, errorPlates, errorPhone, errorCustomerName], errorSummary);

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



    if(!checkRequired(manufacturerInput.value)){
        valid=false;
        manufacturerInput.classList.add("error-input");
        errorManufacturer.innerText=error_emptyString;
    }else if (!checkTextLengthRange(manufacturerInput.value, 2, 60)) {
        valid = false;
        manufacturerInput.classList.add("error-input");
        errorManufacturer.innerText = error_stringLen2to60;
    }



    if(!checkRequired(modelInput.value)){
        valid=false;
        modelInput.classList.add("error-input");
        errorModel.innerText=error_emptyString;
    }else if (!checkTextLengthRange(modelInput.value, 2, 60)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = error_stringLen2to60;

    }


    if(!checkRequired(platesInput.value)){
        valid=false;
        platesInput.classList.add("error-input");
        errorPlates.innerText=error_emptyString;
    }else if (!checkTextLengthRange(platesInput.value, 2, 10)) {
        valid = false;
        platesInput.classList.add("error-input");
        errorPlates.innerText = error_stringLen2to10;
    }


    if(!checkRequired(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText=error_emptyString;
    }else if(!checkPhone(phoneInput.value)){
        valid=false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText="error_notAPhone"
    }


    if(!checkRequired(customerNameInput.value)){
        valid=false;
        customerNameInput.classList.add("error-input");
        errorCustomerName.innerText=error_emptyString;
    }else if (!checkTextLengthRange(customerNameInput.value, 2, 60)) {
        valid = false;
        customerNameInput.classList.add("error-input");
        errorCustomerName.innerText = error_stringLen2to60;
    }


    if(!valid){
        errorSummary.innerText=error_summary;
    }

    return valid;
}