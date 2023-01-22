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

    if(!checkRequired(manufacturerInput.value)){
        valid=false;
        manufacturerInput.classList.add("error-input");
        errorManufacturer.innerText="The field is required.";
    }else if (!checkTextLengthRange(manufacturerInput.value, 2, 60)) {
        valid = false;
        manufacturerInput.classList.add("error-input");
        errorManufacturer.innerText = "The field should contain 2 to 60 characters.";
    }



    if(!checkRequired(modelInput.value)){
        valid=false;
        modelInput.classList.add("error-input");
        errorModel.innerText="The field is required.";
    }else if (!checkTextLengthRange(modelInput.value, 2, 60)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "The field should contain 2 to 60 characters.";

    }


    if(!checkRequired(platesInput.value)){
        valid=false;
        platesInput.classList.add("error-input");
        errorPlates.innerText="The field is required.";
    }else if (!checkTextLengthRange(platesInput.value, 2, 10)) {
        valid = false;
        platesInput.classList.add("error-input");
        errorPlates.innerText = "The field should contain 2 to 10 characters.";
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


    if(!checkRequired(customerNameInput.value)){
        valid=false;
        customerNameInput.classList.add("error-input");
        errorCustomerName.innerText="The field is required.";
    }else if (!checkTextLengthRange(customerNameInput.value, 2, 60)) {
        valid = false;
        customerNameInput.classList.add("error-input");
        errorCustomerName.innerText = "The field should contain 2 to 60 characters.";
    }


    if(!valid){
        errorSummary.innerText="Form contains errors.";
    }

    return valid;
}