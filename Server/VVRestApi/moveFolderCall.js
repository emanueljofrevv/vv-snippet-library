// IMPORTANT! It was partially tested. A more comprehensive testing is needed

const sourceFolderPath = "/source";
const targetFolderPath = "/target";

const data = {
    sourceFolderPath: sourceFolderPath,
    targetFolderPath: targetFolderPath,
};

let shortDescription = `Move folder ${sourceFolderPath} to ${targetFolderPath}`;

const moveFolderResponse = await vvClient.library
    .moveFolder(null, data)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
