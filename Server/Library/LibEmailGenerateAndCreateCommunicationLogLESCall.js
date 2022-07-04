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

shortDescription = "Creating Emails and generating Communication Log";

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

let emailCommLogResp = await vvClient.scripts
    .runWebService("LibEmailGenerateAndCreateCommunicationLog", emailRequestArr)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
