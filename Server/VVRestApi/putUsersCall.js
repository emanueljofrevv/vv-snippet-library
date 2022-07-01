// Get the information from the Site to obtain the site ID.
// For more information, see snippet getSiteCall.

const userEmail = "user@email.com";
const siteName = "siteName";
let shortDescription = `Get Sites ${siteName}`;
const siteParams = {
    q: `[name] eq '${siteName}'`,
};

const getSitesResponse = await vvClient.sites
    .getSites(siteParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteID = getSitesResponse.data[0].id;

// Get the information from the User to obtain the user GUID.
// For more information, see snippet getUsersCall.

shortDescription = `Get User ${userEmail}`;
const userParams = {
    q: `[userid] eq '${userEmail}'`,
};

const getUsersResponse = await vvClient.users
    .getUsers(userParams, siteID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const userID = getUsersResponse.data[0].id;

// User update
// Create the update object with the new information for the user.

shortDescription = `Put User: ${userEmail}`;
const userUpdateObj = {
    firstname: firstName,
    lastname: lastName,
    middleinitial: middleName,
};

const putUsersResponse = await vvClient.users
    .putUsers({}, userUpdateObj, siteID, userID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const putUsers = putUsersResponse.data;

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
