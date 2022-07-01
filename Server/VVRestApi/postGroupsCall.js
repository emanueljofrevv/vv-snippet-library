// Get the iformation of the site where the group is going to be created.
// For more information, see snippet getSiteCall.

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

// Create new group

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

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
