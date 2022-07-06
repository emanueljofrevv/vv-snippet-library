// GET DOCUMENT GUID

const fileName = "test"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Documents Data for file '${fileName}'`;
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

// DELETE DOCUMENT

shortDescription = `Delete document ${fileName}`;

await vvClient.documents
    .deleteDocument(null, documentGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
