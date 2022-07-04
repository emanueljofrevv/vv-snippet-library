let EmailArray = []; //array will contain the array of email addresses.
let recipientList = "";

shortDescription = `Get Users data`;

const groupsParamArr = [
    {
        name: "groups",
        value: groupsToGetEmailAddresses,
    },
];

const groupEmailAddressesResp = await vvClient.scripts
    .runWebService("LibGroupGetGroupUserEmails", groupsParamArr)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

//this foreach loop iterates through all the records pulled and only pushes the email addresses into an array
groupEmailAddressesResp[2].forEach((employee) => {
    EmailArray.push(employee["emailAddress"]);
});

//Load into a comma separated list that can be used to send email from VV
recipientList = EmailArray.join(",");
