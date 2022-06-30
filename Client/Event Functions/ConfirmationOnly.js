//PROCESS NAME for TEMPLATE NAME
//Confirmation message variables
const messageData = "Select OK to continue or cancel to stop without taking any action.";
const title = "PROCESS NAME";

//Confirmation function
function okFunction() {
    const messageData = "The record has been saved.";

    VV.Form.ShowLoadingPanel();
    VV.Form.Global.DisplayMessaging(messageData);
    ////You can add a template script here or uncomment the AJAX save
    //VV.Form.DoAjaxFormSave().then(function (resp) {
    //    VV.Form.HideLoadingPanel();
    //    VV.Form.Global.DisplayMessaging(messageData, title);
    //});
}

function cancelFunction() {
    return;
}

VV.Form.Global.DisplayConfirmMessaging(messageData, title, okFunction, cancelFunction);
