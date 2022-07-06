// GET GROUP ID

let shortDescription = `Get groups data for: ${group}`;
const getGroupsParams = {
    q: `name In ('${group}')`,
};

const getGroupsRes = await vvClient.groups
    .getGroups(getGroupsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const groupID = getGroupsRes.data[0].id;

// GET GROUP USERS

shortDescription = `The group '${groupID}'`;
const groupUsersParams = {
    fields: "Id,Name,UserId,FirstName,LastName,EmailAddress,Enabled",
};

const getGroupUsersRes = await vvClient.groups
    .getGroupsUsers(groupUsersParams, groupID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription));

const users = getGroupUsersRes.data;

if (users.length === 0) {
    // No users in this group
}
