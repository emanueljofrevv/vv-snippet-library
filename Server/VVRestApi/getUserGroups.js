// GET USER ID

const userID = "user@id.com";
const shortDescription = `getUser for user ID ${userID}`;
const getUserQuery = {
    q: `[userid] eq '${userID}'`,
    expand: "true",
};

const getResp = await vvClient.users
    .getUser(getUserQuery)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const userData = getResp.data[0];
const internalUserID = userData["id"];

// GET USER GROUPS

const userGroupParams = {};
shortDescription = `getUserGroups for user ID ${userID}`;

const getUserGroupsResp = await vvClient.users
    .getUserGroups(userGroupParams, internalUserID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
