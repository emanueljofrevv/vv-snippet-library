// GET DOCUMENT GUID

const fileName = "fileName"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Documents Data for '${folderPath}'`;
const getDocsParams = {
  q: `FileName = '${fileName}'`,
};

const getDocsResp = await vvClient.documents
  .getDocuments(getDocsParams)
  .then((res) => parseRes(res))
  .then((res) => checkMetaAndStatus(res, shortDescription))
  .then((res) => checkDataPropertyExists(res, shortDescription))
  .then((res) => checkDataIsNotEmpty(res, shortDescription));

const documentGUID = getDocsResp.data[0].id;

// GET FOLDER GUID

folderPath = "/folder";
shortDescription = `Get folder ${folderPath}`;
const getFolderParams = {
    folderPath: folderPath,
};

let getFolderRes = await vvClient.library
    .getFolders(getFolderParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const folderGUID = getFolderRes.data.id;

// MOVE DOCUMENT TO FOLDER

const moveDocumentParams = {
  folderId: folderGUID,
};

await vvClient.documents
  .moveDocument(null, moveDocumentParams, documentGUID)
  .then((res) => parseRes(res))
  .then((res) => checkMetaAndStatus(res, shortDescription));
