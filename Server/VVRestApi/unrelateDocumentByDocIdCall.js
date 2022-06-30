// UnRelate the document from another form.
// RevisionID = GUID of the form you want to unrelate the document from.
// DocId = Document ID of the document

const unrelateDocumentByDocIdResp = await vvClient.forms
    .unrelateDocumentByDocId(RevisionID, DocId)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
