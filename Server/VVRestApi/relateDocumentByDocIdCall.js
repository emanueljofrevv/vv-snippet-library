// Relate the document to another form.
//RevisionID = GUID of the form you want to relate the document to.
//document['name'] = name of the document
let relateDocByDocIdResp = await vvClient.forms
    .relateDocumentByDocId(RevisionID, document["name"])
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
