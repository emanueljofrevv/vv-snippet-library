//PROCESS NAME for TEMPLATE NAME

//Confirmation message variables
const message = "Select OK to continue or cancel to stop without taking any action.";
const title = "PROCESS NAME";

//Confirmation function
function okFunction() {
    const message = "The record has been saved.";
    const title = "Save Form";

    VV.Form.ShowLoadingPanel();
    VV.Form.DoAjaxFormSave().then(function () {
        VV.Form.HideLoadingPanel();
        VV.Form.Global.DisplayMessaging(message, title);
    });
}

function cancelFunction() {
    return;
}

//Measuring the form validation
if (VV.Form.Template.FormValidation()) {
    VV.Form.Global.DisplayConfirmMessaging(message, title, okFunction, cancelFunction);
} else {
    message =
        "All of the fields have not been filled in completely or there is an issue with the range of the data entered.  Highlight your mouse over the red icon to see how you can resolve the error stopping you from saving this form.";
    VV.Form.Global.DisplayMessaging(message, title);
    VV.Form.HideLoadingPanel();
}
