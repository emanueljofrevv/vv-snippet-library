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

// GET RELATED FORMS

shortDescription = `Forms related to ${formID}`;
const getRelatedForms = {
    q: "[instanceName] LIKE '%Another Form-%'",
};

const getRelatedResp = await vvClient.forms
    .getFormRelatedForms(formGUID, getRelatedForms)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription));
//  .then((res) => checkDataIsNotEmpty(res, shortDescription));
//  If you want to throw an error and stop the process if no data is returned, uncomment the line above
