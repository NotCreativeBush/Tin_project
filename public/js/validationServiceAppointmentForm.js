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

    let valid = true;

    if (!checkRequired(customerInput.value)) {
        valid = false;
        customerInput.classList.add("error-input");
        errorCustomer.innerText = "The field is required.";
    }if(!checkNumber(customerInput.value)){
        valid = false;
        customerInput.classList.add("error-input");
        errorCustomer.innerText = "The field has to be an ID.";
    }


    if (!checkRequired(mechanicInput.value)) {
        valid = false;
        mechanicInput.classList.add("error-input");
        errorMechanic.innerText = "The field is required.";
    }if(!checkNumber(mechanicInput.value)){
        valid = false;
        mechanicInput.classList.add("error-input");
        errorMechanic.innerText = "The field has to be an ID.";
    }


    if (!checkRequired(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "The field is required.";
    }if(!checkNumber(priceInput.value)){
        valid=false;
        priceInput.classList.add("error-input");
        errorPrice.innerText="The field should be a number"
    }if(!checkNumberRange(priceInput.value,50,100000)){
        valid=false;
        priceInput.classList.add("error-input");
        errorPrice.innerText="The field should be between 50 and 100000"

    }


    if (!checkRequired(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "The field is required.";
    }if(!checkDate(dateInput.value)){
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "The field should be a date.";
    }


    if(!checkRequired(timeInput.value)){
        valid = false;
        timeInput.classList.add("error-input");
        errorTime.innerText = "The field is mandatory.";
    }
    if(!checkTime(timeInput.value)){
        valid = false;
        timeInput.classList.add("error-input");
        errorTime.innerText = "The field should be time.";
    }


    if(!checkRequired(discountInput.value)){
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText="This field is required.";
    }
    if(!checkNumber(discountInput.value)){
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText="The field should be a number";
    }
    if(!checkNumberRange(discountInput.value, 0,100)) {
        valid=false;
        discountInput.classList.add("error-input");
        errorDiscount.innerText="The field should be a number between 0 and 100";
    }


    if (!valid) {
        errorSummary.innerText = "Form contains errors.";
    }

    return valid;
}