const formTemplateName = "Some template name"; // This could be placed in the Config Variables section
const formGUID = "7d5297a4-b531-470d-9d13-604917886691";
const shortDescription = `Update form ${formGUID}`;
const formFieldsToUpdate = {
    fieldName: "fieldValue",
};

const postFormRevRes = await vvClient.forms
    .postFormRevision(null, formFieldsToUpdate, formTemplateName, formGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
