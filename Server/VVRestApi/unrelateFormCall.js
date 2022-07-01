// Get parent form revision id

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

const parentRevisionID = getParentFormRes.data[0].revisionId;

// Get child form revision id

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

const childRevisionID = getChildFormRes.data[0].revisionId;

// Unrelated forms

shortDescription = `Unrelate forms ${parentFormID} and ${childFormID}`;

await vvClient.forms
    .unrelateForm(parentRevisionID, childRevisionID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
// unrelateForm dose not return data
