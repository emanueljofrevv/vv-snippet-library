// 1. Get the "formGUID" or "revisionID"
const templateName = `Template Form Name`; // Place this in the 'Configurable Variables' section
let shortDescription = `GetForm with revisionID ${currentFormID}`;

const getFormsParams = {
    q: `[instanceName] eq '${currentFormID}'`,
    expand: true,
};

const getCurrentFormsRes = await vvClient.forms
    .getForms(getFormsParams, templateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const revisionID = getCurrentFormsRes.data[0].revisionID;

const recordID = "Form-000001"; // Place this in the 'Configurable Variables' section
shortDescription = `GetForm with formID ${recordID}`;

// 2. Unrelate forms
await vvClient.forms
    .unrelateFormByDocId(revisionID, recordID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
