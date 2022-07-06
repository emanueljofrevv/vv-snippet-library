// GET THE SITE ID WHERE THE GROUP IS GOING TO BE CREATED
// For more information, see snippet getSite.

const siteName = "mySite"; // Place this in Configurable Variables
let shortDescription = `Get Sites: ${siteName}`;
const siteParams = {
    q: `[name] eq '${siteName}'`,
};

const getSitesResp = await vvClient.sites
    .getSites(siteParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteId = getSitesResp.data[0].id;

// CREATE NEW GROUP

const groupName = "myGroup"; // Place this in Configurable Variables
const groupDescription = "myGroupDescription"; // Place this in Configurable Variables
shortDescription = `Post Groups: ${groupName}`;
const groupsData = {
    name: groupName,
    description: groupDescription,
};

const postGroupsResp = await vvClient.sites
    .postGroups(null, groupsData, siteId)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const postGroups = postGroupsResp.data;

