// 1. Get the document id

const folderPath = "/Files"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Documents Data for '${folderPath}'`;
const getDocsParams = {
    q: `FolderPath = '${folderPath}'`,
};

const getDocsResp = await vvClient.documents
    .getDocuments(getDocsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const documentId = getDocsResp.data[0].id;

// 2. Get the "formRevisionId"

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

const formRevisionId = getFormsResp.data[0].revisionId;

// 3. Relate the document to the form

shortDescription = `Relate document '${folderPath}' to form '${formID}'`;

await vvClient.forms
    .relateDocument(formRevisionId, documentId)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
