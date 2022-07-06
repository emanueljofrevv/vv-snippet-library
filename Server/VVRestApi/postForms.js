const newFormTemplateName = "Template Name"; // This variable should be in the Configurable Variables section
const shortDescription = `Post form ${newFormTemplateName}`;
const newFormData = {
    "Name of field": "Some value",
    "Another field": "Another value",
};

const postFormsRes = await vvClient.forms
    .postForms(null, newFormData, newFormTemplateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
