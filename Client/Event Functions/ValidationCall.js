//PROCESS NAME for TEMPLATE NAME

const message =
    "All of the fields have not been filled in completely or there is an issue with the range of the data entered. Highlight your mouse over the red icon to see how you can resolve the error stopping you from saving this form.";
const title = "Form Name";

// Measuring the form validation
if (VV.Form.Template.FormValidation()) {
    //Call your template script here
} else {
    VV.Form.HideLoadingPanel();
    VV.Form.Global.DisplayMessaging(message, title);
}
