const webServiceName = "Name of Web Service in VV"; // Place this in the 'Configurable Variables' section
let shortDescription = `Run Web Service: ${webServiceName}`;

// The following array has to contain one object for each parameter sent to the next web service
// Each object has to contain two properties:
//     name: Name of the parameter
//     value: value for the parameter

const webServiceParams = [
    {
        name: "Parameter Name 1",
        value: "value 1",
    },
    {
        name: "Parameter Name 2",
        value: "value 2",
    },
];

const runWSResp = await vvClient.scripts
    .runWebService(webServiceName, webServiceParams)
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const runWSData = runWSResp.data;

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
