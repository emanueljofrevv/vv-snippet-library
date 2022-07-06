// This is the email patern for calling the LibEmailGenerateAndCreateCommunicationLog.

let shortDescription = "Creating Emails and generating Communication Log";
// Email Template Variables for sending email.
const emailTemplateName = "Generic Template Name";
const GenericTokenOne = "[Generic Token Name One]";
const GenericTokenTwo = "[Generic Token Name Two]";

const tokenArr = [
    {
        name: GenericTokenOne,
        value: "GenericTokenOneValue",
    },
    {
        name: GenericTokenTwo,
        value: "GenericTokenTwoValue",
    },
];
const emailRequestArr = [
    {
        name: "Email Name",
        value: emailTemplateName,
    },
    {
        name: "Tokens",
        value: tokenArr,
    },
    {
        name: "Email Address",
        value: commLogUniqueEmailAddresses.join(","),
    },
    {
        name: "Email AddressCC",
        value: "",
    },
    {
        name: "SendDateTime",
        value: "",
    },
    {
        name: "RELATETORECORD",
        value: [RecordIDOne, RecordIDTwo],
    },
    {
        name: "OTHERFIELDSTOUPDATE",
        value: {
            "Individual ID": OpPermIndividualID,
            "Record ID": RecordIDOne,
            "Other Record": RecordIDTwo,
        },
    },
];

const emailCommLogResp = await vvClient.scripts
    .runWebService("LibEmailGenerateAndCreateCommunicationLog", emailRequestArr)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
