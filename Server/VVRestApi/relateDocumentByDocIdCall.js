// Relate the document to another form.
//RevisionID = GUID of the form you want to relate the document to.
//document['name'] = name of the document
const relateDocByDocIdResp = await vvClient.forms
    .relateDocumentByDocId(RevisionID, document["name"])
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section