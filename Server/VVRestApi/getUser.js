const userID = "user@id.com";
const shortDescription = `Get user for user ID: ${userID}`;
const getUserQuery = {
    q: `[userid] eq '${userID}'`,
    expand: "true",
};

const getUserResp = await vvClient.users
    .getUser(getUserQuery)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
