// GET THE PARENT GUID

const parentFormID = "FORM-000001"; // Place this form template name in the 'Configurable Variables' section on your script
const parentTemplateName = `Form Template Name`; // Place this form template name in the 'Configurable Variables' section on your script
let shortDescription = `Get form with revisionID ${parentFormID}`;

const getFormsParams = {
    q: `[instanceName] eq '${parentFormID}'`,
    expand: true,
};

const getParentFormRes = await vvClient.forms
    .getForms(getFormsParams, parentTemplateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const parentGUID = getParentFormRes.data[0].revisionId;

// RELATE FORMS

const childFormID = "Form-000001"; // Place this in the 'Configurable Variables' section
shortDescription = `relating forms: ${parentGUID} and form ${childFormID}`;

await vvClient.forms
    .relateFormByDocId(parentGUID, childFormID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
