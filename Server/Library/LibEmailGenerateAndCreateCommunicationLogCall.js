// This is the email patern for calling the LibEmailGenerateAndCreateCommunicationLog.
// Main update is in the OTHERFIELDSTOUPDATE object.

// Email Template Variables for sending email.
let emailTemplateName = "Generic Template Name";

let GenericTokenOne = "[Generic Token Name One]";
let GenericTokenTwo = "[Generic Token Name Two]";

let tokenArr = [
    { name: GenericTokenOne, value: GenericTokenOneValue },
    { name: GenericTokenTwo, value: GenericTokenTwoValue },
];
let emailRequestArr = [
    { name: "Email Name", value: emailTemplateName },
    { name: "Tokens", value: tokenArr },
    { name: "Email Address", value: commLogUniqueEmailAddresses.join(",") },
    { name: "Email AddressCC", value: "" },
    { name: "SendDateTime", value: "" },
    { name: "RELATETORECORD", value: [RecordIDOne, RecordIDTwo] },
    {
        name: "OTHERFIELDSTOUPDATE",
        value: {
            "Individual ID": OpPermIndividualID,
            "Record ID": RecordIDOne,
            "Other Record": RecordIDTwo,
        },
    },
];

let emailCommLogResp = await vvClient.scripts.runWebService("LibEmailGenerateAndCreateCommunicationLog", emailRequestArr);
let emailCommLogData = emailCommLogResp.hasOwnProperty("data") ? emailCommLogResp.data : null;

if (emailCommLogResp.meta.status !== 200) {
    throw new Error(`There was an error when calling LibEmailGenerateAndCreateCommunicationLog. ${errorMessageGuidance}`);
}
if (!emailCommLogData || !Array.isArray(emailCommLogData)) {
    throw new Error(`Data was not returned when calling LibEmailGenerateAndCreateCommunicationLog. ${errorMessageGuidance}`);
}
if (emailCommLogData[0] === "Error") {
    throw new Error(`The call to LibEmailGenerateAndCreateCommunicationLog returned with an error. ${emailCommLogData[1]}. ${errorMessageGuidance}`);
}
if (emailCommLogData[0] !== "Success") {
    throw new Error(`The call to LibEmailGenerateAndCreateCommunicationLog returned with an unhandled error. ${errorMessageGuidance}`);
}
