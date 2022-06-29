/*
- Jason Hatch commented on 07/01/2021 -
Must have web service LibEmailGenerateAndCreateCommunicationLog setup already.
Also need communication log form imported into the customer database as a form template.
*/

// Email Template Variables for sending email.
let emailTemplateName = "Agency Record Ready for Review";

let TokenAgencyName = "[Agency Name]";
let TokenLESProgramNameAndRegion = "[LES Program Name And Region]";

// Remove duplicate email addresses.
commLogUniqueEmailAddresses = [...new Set(commLogUniqueEmailAddresses)];

let tokenArr = [
    { name: TokenAgencyName, value: AgencyLegalName },
    { name: TokenLESProgramNameAndRegion, value: LESProgramNameAndRegion },
];
let emailRequestArr = [
    { name: "Email Name", value: emailTemplateName },
    { name: "Tokens", value: tokenArr },
    { name: "Email Address", value: commLogUniqueEmailAddresses.join(",") },
    { name: "Email AddressCC", value: "" },
    { name: "SendDateTime", value: "" },
    { name: "RELATETORECORD", value: [AgencyID, LESID] },
    {
        name: "OTHERFIELDSTOUPDATE",
        value: {
            "Primary Record ID": AgencyID,
            "Other Record": LESID,
        },
    },
];

let emailCommLogResp = await vvClient.scripts.runWebService("LibEmailGenerateAndCreateCommunicationLog", emailRequestArr);
let emailCommLogData = emailCommLogResp.hasOwnProperty("data") ? emailCommLogResp.data : null;

if (emailCommLogResp.meta.status !== 200) {
    throw new Error(`There was an error when calling LibEmailGenerateAndCreateCommunicationLog.`);
}
if (!emailCommLogData || !Array.isArray(emailCommLogData)) {
    throw new Error(`Data was not returned when calling LibEmailGenerateAndCreateCommunicationLog.`);
}
if (emailCommLogData[0] === "Error") {
    throw new Error(`The call to LibEmailGenerateAndCreateCommunicationLog returned with an error. ${emailCommLogData[1]}.`);
}
if (emailCommLogData[0] !== "Success") {
    throw new Error(`The call to LibEmailGenerateAndCreateCommunicationLog returned with an unhandled error.`);
}
