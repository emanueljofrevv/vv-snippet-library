//PROCESS NAME for TEMPLATE NAME

const message = "The record has been saved.";
const title = "Save Form";

//Measuring the form validation
if (VV.Form.Template.FormValidation() === true) {
    VV.Form.ShowLoadingPanel();

    VV.Form.DoAjaxFormSave().then(function () {
        VV.Form.HideLoadingPanel();
        VV.Form.Global.DisplayMessaging(message, title);
    });
} else {
    message =
        "All of the fields have not been filled in completely or there is an issue with the range of the data entered.  Highlight your mouse over the red icon to see how you can resolve the error stopping you from saving this form.";
    VV.Form.Global.DisplayMessaging(message, title);
    VV.Form.HideLoadingPanel();
}
