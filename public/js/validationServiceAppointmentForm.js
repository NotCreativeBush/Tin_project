function validateForm() {
    const customerInput = document.getElementById("car_id");
    const mechanicInput = document.getElementById("mechanic_id");
    const priceInput = document.getElementById("price");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("timeslot");
    const discountInput = document.getElementById("discount");

    const errorCustomer = document.getElementById("errorCustomer");
    const errorMechanic = document.getElementById("errorMechanic");
    const errorPrice = document.getElementById("errorPrice");
    const errorDate = document.getElementById("errorDate");
    const errorTime = document.getElementById("errorTime");
    const errorDiscount = document.getElementById("errorDiscount");

    const errorSummary = document.getElementById("errorSummary");

    resetErrors([customerInput, mechanicInput, priceInput, dateInput, timeInput, discountInput], [errorCustomer, errorMechanic, errorPrice, errorDate, errorTime, errorDiscount], errorSummary);

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

    if (!checkRequired(customerInput.value)) {
        valid = false;
        customerInput.classList.add("error-input");
        errorCustomer.innerText = error_emptyString;
    }if(!checkNumber(customerInput.value)){
        valid = false;
        customerInput.classList.add("error-input");
        errorCustomer.innerText = error_notANumber;
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


    if (!checkRequired(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = error_emptyString;
    }if(!checkNumber(priceInput.value)){
        valid=false;
        priceInput.classList.add("error-input");
        errorPrice.innerText=error_notANumber;
    }if(!checkNumberRange(priceInput.value,50,100000)){
        valid=false;
        priceInput.classList.add("error-input");
        errorPrice.innerText="The field should be between 50 and 100000"

    }


    if (!checkRequired(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = error_emptyString;
    }if(!checkDate(dateInput.value)){
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = error_notADate;
    }


    if(!checkRequired(timeInput.value)){
        valid = false;
        timeInput.classList.add("error-input");
        errorTime.innerText = error_emptyString;
    }
    if(!checkTime(timeInput.value)){
        valid = false;
        timeInput.classList.add("error-input");
        errorTime.innerText = error_notATime;
    }


    if(!checkRequired(discountInput.value)){
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText=error_emptyString;
    }
    if(!checkNumber(discountInput.value)){
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText=error_notANumber;
    }
    if(!checkNumberRange(discountInput.value, 0,100)) {
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText=error_number0to100;
    }


    if (!valid) {
        errorSummary.innerText = error_summary;
    }

    return valid;
}