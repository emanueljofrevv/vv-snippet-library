// GET FORM GUID

const formID1 = 'form1-0001'
const templateName = `Template Form Name`; // Place this in the 'Configurable Variables' section
let shortDescription = `GetForm with revisionID ${formID1}`;

const getFormsParams = {
    q: `[instanceName] eq '${formID1}'`,
    expand: true,
};

const getCurrentFormsRes = await vvClient.forms
    .getForms(getFormsParams, templateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const form1GUID = getCurrentFormsRes.data[0].revisionID;

const formID2 = "Form-000001"; // Place this in the 'Configurable Variables' section
shortDescription = `GetForm with formID ${formID2}`;

// UNRELATE FORMS

await vvClient.forms
    .unrelateFormByDocId(form1GUID, formID2)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
