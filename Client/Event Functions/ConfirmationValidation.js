//PROCESS NAME for TEMPLATE NAME

//Confirmation message variables
const message = "Select OK to continue or cancel to stop without taking any action.";
const title = "PROCESS NAME";

function okFunction() {
    VV.Form.ShowLoadingPanel();
    // Calling template function goes here
    VV.Form.HideLoadingPanel();
}

function cancelFunction() {
    return;
}

// Measuring the form validation
if (VV.Form.Template.FormValidation()) {
    //Confirmation function
    VV.Form.Global.DisplayConfirmMessaging(message, title, okFunction, cancelFunction);
} else {
    message =
        "All of the fields have not been filled in completely or there is an issue with the range of the data entered. Highlight your mouse over the red icon to see how you can resolve the error stopping you from saving this form.";
    VV.Form.Global.DisplayMessaging(message, title);
}
