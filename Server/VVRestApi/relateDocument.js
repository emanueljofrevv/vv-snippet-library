// GET THE DOCUMENT ID

const fileName = "fileName"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Documents Data for '${folderPath}'`;
const getDocsParams = {
    q: `FileName = '${fileName}'`,
};

const getDocsResp = await vvClient.documents
    .getDocuments(getDocsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const documentId = getDocsResp.data[0].id;

// GET THE FORM GUID

const templateName = `Test Form`; // Place this in the 'Configurable Variables' section
const formID = "Test Form-000002"; // Place this in the 'Configurable Variables' section
shortDescription = `Get from '${formID}'`;
const getFormsParams = {
    q: `[instanceName] eq '${formID}'`,
    expand: true,
};

const getFormsResp = await vvClient.forms
    .getForms(getFormsParams, templateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const formGUID = getFormsResp.data[0].revisionId;

// RELATE THE DOCUMENT

shortDescription = `Relate document '${folderPath}' to form '${formID}'`;

await vvClient.forms
    .relateDocument(formGUID, documentId)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
