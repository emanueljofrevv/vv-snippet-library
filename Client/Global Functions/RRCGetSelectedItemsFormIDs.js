/*
Function: RRCGetSelectedItemsFormIDs
Parameters: rccName: Name of the RCC control
*/

let rrcControl = $('[VVFieldName="' + rccName + '"]')[0];
let rrcRows = rrcControl.childNodes[0].childNodes[4].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes;
let selectedRows = [];
let docIDs = [];
let context = null;
let keepLooking = false;

// Loop through all the rows
for (let row = 0; row < rrcRows.length; row++) {
    if (rrcRows[row].nodeName == "TR") {
        // Check if the row is selected
        if (rrcRows[row].getAttribute("class").includes("selected")) {
            // Add the row to the selected rows array
            selectedRows.push(rrcRows[row]);
        }
    }
}

// Loop through all the selected rows
for (let selectedRow = 0; selectedRow < selectedRows.length; selectedRow++) {
    keepLooking = true;
    // Get data context
    context = selectedRows[selectedRow]["__ngContext__"];

    // Loop through all the data context for the selected row
    for (let key = 0; key < context.length && keepLooking; key++) {
        // Check if the key is the document ID
        if (context[key] && typeof context[key] === "object") {
            if (context[key].docId) {
                // Add the document ID to the docIDs array
                docIDs.push(context[key].docId);
                // Stop looking in this row and move on to the next row
                keepLooking = false;
            }
        }
    }
}

return docIDs;
