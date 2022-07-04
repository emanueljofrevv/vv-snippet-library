const folderPath = "/MyFolder/";

const shortDescription = `Get folder ${folderPath}`;
// Status code 403 must be ignored (not throwing error) because it means that the folder doesn't exist
const ignoreStatusCode = 403;

const getFolderParams = {
    folderPath: folderPath,
};

let getFolderRes = await vvClient.library
    .getFolders(getFolderParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription, ignoreStatusCode))
    .then((res) => checkDataPropertyExists(res, shortDescription, ignoreStatusCode))
    .then((res) => checkDataIsNotEmpty(res, shortDescription, ignoreStatusCode));

const folderID = getFolderRes.data.id;

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
