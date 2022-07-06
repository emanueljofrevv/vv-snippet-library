/*
Script Name:    AwaitSetFieldValue
Customer:       VisualVault
Purpose:        The purpose of this function is to receive an array of objects, composed of name and value, and set that value in the corresponding field asynchronously.
Parameters:     The following represent variables passed into the function:  
                fields - ArrayList of objects.
Return Value:   The following represents the value being returned from this function:
                        
Date of Dev: 02/21/2022
Last Rev Date: 02/21/2022
Revision Notes:

Object array example:

var fields = 
[
    {
        name: "Name of the field",
        value: "value for the field"
    }
];
*/

const deferred = $.Deferred();
let promiseArray = [];

// Add the promises to the array
for (let i = 0; i < fields.length; i++) {
    promiseArray.push(VV.Form.SetFieldValue(fields[i].name, fields[i].value));
}

// Wait for all promises to be resolved
return Promise.all(promiseArray).then(function () {
    // Resolve the deferred object
    deferred.resolve();
});
