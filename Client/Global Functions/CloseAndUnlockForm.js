/*
    Script Name:   CloseAndUnlockForm
    Customer:      VisualVault
    Purpose:       The purpose of this function is to have a reusable function to close a form and unlock it as if they selected Close at the top of the screen.
    Parameters:    The following represent variables passed into the function:  
                    Passed Parameters:  PassedValue, ValidationType
                    PassedValue - this is a string of the value that is being checked.
                    ValidationType - this is the type of validation that will occur.  Value values are as follows:
                          Phone, Email, URL, Blank, Zip, DDSelect, SSN, EIN, NPI, Currency, Percent, NumberOnly, MedicaidRecipientID, MedicaidProviderID
                    These work in conjunction with the SetupReg file where all the regular expressions are stored.
    Return Value:  The following represents the value being returned from this function:
                    True if required number are selected, false if not.        
    Date of Dev:   06/01/2011
    Last Rev Date: 05/24/2022
    Revision Notes:
    06/01/2011 - Jason Hatch:         Initial creation of the business process. 
    04/15/2019 - Maxwell Rehbein:     NumberOnly created. 
    07/22/2020 - Kendra Austin:       Two medicaid ID types created.
    05/24/2022 - Franco Petosa Ayala: Update function to ES6.
                                      Replace the first conditional argument for 'hardCore' variable to make the code easier to understand.
*/

var messagedata = 'Are you sure you would like to close this form? Any unsaved changes will be lost.'

var okfunction= function () {
    HandleFormWindowClosing(true);
}

var cancelfunction = function () {
    return;
}

if (showMessage == 'No' || typeof(showMessage) != 'undefined') {
    HandleFormWindowClosing(true);
}
else {
    VV.Form.Global.DisplayConfirmMessaging(messagedata,'Close',okfunction,cancelfunction);
}