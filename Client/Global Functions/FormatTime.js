/*
    Script Name:   FormatTime
    Customer:      VisualVault
    Purpose:       This function takes a time string entered in any format and format it into a standard of HH:MM AM or HH:MM PM.  
    Parameters:    The following represent variables passed into the function:  
                   timeVal       Time value as a string

    Return Value:  The following represents the value being returned from this function:
                        newTimeStr:  Returns the time passed in the parameter in the new format as a string       


    Date of Dev: ???
    Last Rev Date: 26/04/2022

    Revision Notes:
    26/04/2022 - Facundo Cameto:    Updated a variable name
                                    Added header
                                    Updated variable definitions
                                    Updated deprecated function
*/

//Get values from the original value passed to the function.
const colonPlacement = timeVal.search(":");
timeVal = timeVal.toUpperCase();
const amLocation = timeVal.search("AM");
const pmLocation = timeVal.search("PM");

//Remove all characters
const onlyNumbersTimeVal = ("" + timeVal).replace(/\D/g, "");

let newTimeStr = "";
//If colon was present, format the string.
if (colonPlacement > 0) {
    newTimeStr = onlyNumbersTimeVal.substring(0, colonPlacement) + ":" + onlyNumbersTimeVal.substring(colonPlacement, onlyNumbersTimeVal.length);
} else {
    //Handle what occurs if a colon was not present.
    if (onlyNumbersTimeVal.length < 3) {
        //return when not enough characters were entered, time check will communicate the format.
        return timeVal;
    } else if (onlyNumbersTimeVal.length == 3) {
        //Attempt to put the colon after the first character.
        newTimeStr = "0" + onlyNumbersTimeVal.substring(0, 1) + ":" + onlyNumbersTimeVal.substring(1, onlyNumbersTimeVal.length);
    } else if (onlyNumbersTimeVal.length == 4) {
        //Attempt to put the colon after the second character.
        newTimeStr = onlyNumbersTimeVal.substring(0, 2) + ":" + onlyNumbersTimeVal.substring(2, onlyNumbersTimeVal.length);
    } else if (onlyNumbersTimeVal.length > 4) {
        //Too many characters were entered, time check will communicate the format.
        return timeVal;
    }
}

//Add the time of day back into the string.
if (amLocation > 0) {
    newTimeStr = newTimeStr + " AM";
} else if (pmLocation > 0) {
    newTimeStr = newTimeStr + " PM";
} else {
    //Not doing anything in this state because the user has not entered a value.
}

return newTimeStr;
