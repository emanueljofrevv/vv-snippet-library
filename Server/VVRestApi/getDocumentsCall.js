const folderPath = "/Files"; // Place this in the 'Configurable Variables' section
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
