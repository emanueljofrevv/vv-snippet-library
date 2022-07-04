// This is the email patern for calling the LibEmailGenerateAndCreateCommunicationLog.
// Main update is in the OTHERFIELDSTOUPDATE object.

// Email Template Variables for sending email.
let emailTemplateName = "Generic Template Name";

let GenericTokenOne = "[Generic Token Name One]";
let GenericTokenTwo = "[Generic Token Name Two]";

shortDescription = "Creating Emails and generating Communication Log";

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

let emailCommLogResp = await vvClient.scripts
    .runWebService("LibEmailGenerateAndCreateCommunicationLog", emailRequestArr)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
