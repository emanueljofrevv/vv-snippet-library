function RedirectToConfirmationPage() {
    try {
        const submitUrl = VV.BaseAppUrl + "app/" + VV.CustomerAlias + "/" + VV.CustomerDatabaseAlias + "/FormConfirmation?DataID=" + VV.Form.DataID;

        if (window) {
            window.location.href = submitUrl;
        }
    } catch (e) {
        if (window) {
            window.location.href = "./FormConfirmation";
        }
    }
}
