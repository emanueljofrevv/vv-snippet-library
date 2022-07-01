// Get the iformation of the group to update.
// For more information, see snippet getGroupsCall.

const groupName = "testGroup"; // Place this in the 'Configurable Variables' section
let shortDescription = `Get Groups: ${groupName}`;
const groupParams = {
    q: `[name] eq '${groupName}'`,
};

const getGroupsResp = await vvClient.groups
    .getGroups(groupParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteId = getGroupsResp.data[0].siteId;
const groupId = getGroupsResp.data[0].id;

// Update the group

const newGroupName = "testGroupUpdated"; // Place this in the 'Configurable Variables' section
const newGroupDescription = "This is a test group updated"; // Place this in the 'Configurable Variables' section
shortDescription = `Put Groups: ${groupName}`;
const updateGroup = {
    name: newGroupName,
    description: newGroupDescription,
};

const putGroupsResp = await vvClient.sites
    .putGroups({}, updateGroup, siteId, groupId)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const putGroups = putGroupsResp.data;

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
