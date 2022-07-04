// Get user id

const userID = "user@id.com";
const shortDescriptionGetUser = `getUser for user ID ${userID}`;
const getUserQuery = {
    q: `[userid] eq '${userID}'`,
    expand: "true",
};

const getResp = await vvClient.users
    .getUser(getUserQuery)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescriptionGetUser))
    .then((res) => checkDataPropertyExists(res, shortDescriptionGetUser))
    .then((res) => checkDataIsNotEmpty(res, shortDescriptionGetUser));

const userData = getResp.data[0];
const internalUserID = userData["id"];

// Get user groups

const userGroupParams = {};
const shortDescriptionUserGroups = `getUserGroups for user ID ${userID}`;

const getUserGroupsResp = await vvClient.users
    .getUserGroups(userGroupParams, internalUserID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescriptionUserGroups))
    .then((res) => checkDataPropertyExists(res, shortDescriptionUserGroups))
    .then((res) => checkDataIsNotEmpty(res, shortDescriptionUserGroups));
