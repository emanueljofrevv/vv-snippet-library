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

// GET FORM RELATED FORMS

shortDescription = `Get forms related to ${formID}`;

const relatedDocumentsResp = await vvClient.forms
    .getFormRelatedDocs(formGUID, null)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

