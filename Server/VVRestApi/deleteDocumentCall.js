// 1. Get document revision ID

const folderPath = "/Files"; // Place this in the 'Configurable Variables' section
const fileName = "test"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Documents Data for '${folderPath}'`;
const getDocsParams = {
    q: `FolderPath = '${folderPath}'`,
};

const getDocsResp = await vvClient.documents
    .getDocuments(getDocsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const docRevisionID = getDocsResp.data.filter((doc) => doc.fileName === fileName)[0].id;

// 2. Delete document

shortDescription = `Delete document ${fileName}`;

await vvClient.documents
    .deleteDocument(null, docRevisionID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
