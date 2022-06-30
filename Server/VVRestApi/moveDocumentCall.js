//Move document
//folderGUID = GUID of the folder
//documentId = GUID of the document
let moveDocument = await vvClient.documents.moveDocument(null, { folderId: folderGUID }, relateDocument.documentId);
if (moveDocument.meta.status !== 200) {
    throw new Error("Could not move document to processing folder");
}
