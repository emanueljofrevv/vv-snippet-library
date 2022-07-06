const folderPath = "/MyFolder/";

const shortDescription = `Get folder ${folderPath}`;
// Status code 403 must be ignored (not throwing error) because it means that the folder doesn't exist
const ignoreStatusCode = 403;

const getFolderParams = {
    folderPath: folderPath,
};

const getFolderRes = await vvClient.library
    .getFolders(getFolderParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription, ignoreStatusCode))
    .then((res) => checkDataPropertyExists(res, shortDescription, ignoreStatusCode))
    .then((res) => checkDataIsNotEmpty(res, shortDescription, ignoreStatusCode));

const folderGUID = getFolderRes.data.id;

