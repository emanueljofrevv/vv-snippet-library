// Get the related Documents
// RevisionID = GUID of the form
// shortDescription is a required global variable

const relatedDocumentsResp = await vvClient.forms
    .getFormRelatedDocs(RevisionID, null)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
