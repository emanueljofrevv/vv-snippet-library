// GET FORM GUID

const formID = "Form-000001";
const templateName = `Template Name`;
let shortDescription = `Get form ${formID}`;

const getFormsParams = {
    q: `[instanceName] eq '${formID}'`,
    expand: true, // true to get all the form's fields
    //fields: 'id,name', // to get only the fields 'id' and 'name'
};

const getFormsRes = await vvClient.forms
    .getForms(getFormsParams, templateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const formGUID = getFormsRes.data[0].revisionId;

// GET DOCUMENT GUID

const fileName = "fileName"; // Place this in the 'Configurable Variables' section
shortDescription = `Get Documents Data for '${folderPath}'`;
const getDocsParams = {
    q: `FileName = '${fileName}'`,
};

const getDocsResp = await vvClient.documents
    .getDocuments(getDocsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const documentGUID = getDocsResp.data[0].id;

// RELATE DOCUMENT WITH FORM

shortDescription = `Relate form ${formID} to document ${fileName}`;

await vvClient.forms
    .relateDocumentByDocId(formGUID, documentGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
