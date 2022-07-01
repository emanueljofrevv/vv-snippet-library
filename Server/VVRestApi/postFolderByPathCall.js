const newFolderPath = "/newFolder"; // This variable is recommended to be defined in the Configurable Variable section of the web service
const shortDescription = `Post folder '${newFolderPath}'`;
const folderData = {
    description: "folder description",
};

const postFolderResp = await vvClient.library
    .postFolderByPath(null, folderData, newFolderPath)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const newFolderID = postFolderResp.data.id;
