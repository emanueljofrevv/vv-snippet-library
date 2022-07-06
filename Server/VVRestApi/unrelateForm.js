// GET PARENT FORM GUID

const parentTemplateName = "Parent";
const parentFormID = "Parent-000001";
let shortDescription = `GetForm ${parentFormID}`;
const getParentFormParams = {
    q: `[instanceName] eq '${parentFormID}'`,
    expand: true,
};

const getParentFormRes = await vvClient.forms
    .getForms(getParentFormParams, parentTemplateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const parentGUID = getParentFormRes.data[0].revisionId;

// GET CHILD FORM GUID

const childTemplateName = "Child";
const childFormID = "Child-000001";
shortDescription = `GetForm ${childFormID}`;
const getChildFormsParams = {
    q: `[instanceName] eq '${childFormID}'`,
    expand: true,
};

const getChildFormRes = await vvClient.forms
    .getForms(getChildFormsParams, childTemplateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const childGUID = getChildFormRes.data[0].revisionId;

// UNRELATE FORMS

shortDescription = `Unrelate forms ${parentFormID} and ${childFormID}`;

await vvClient.forms
    .unrelateForm(parentGUID, childGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
