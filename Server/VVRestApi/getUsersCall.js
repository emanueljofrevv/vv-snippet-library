// 1° Get the Site ID where the user is located

const siteName = "Site Name"; // Place this in the 'Configurable Variables' section

let shortDescription = `Get site ${siteName}`;
const site = {
    q: `name eq '${siteName}'`,
    fields: "id",
};

const getSiteResp = await vvClient.sites
    .getSites(site)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteID = getSiteResp.data[0].id;

// 2° Get user data

const userID = "User ID"; // Place this in the 'Configurable Variables' section

shortDescription = `Get user ${userID}`;
const usersParams = {
    q: `[userid] eq '${userID}'`,
    // fields: 'id,name,userid,siteid,firstname,lastname,emailaddress',
    // uncomment the line above and comment the line below to get only some specific data from the user
    expand: "true",
};

const resp = await vvClient.users
    .getUsers(usersParams, siteID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription));
// .then((res) => checkDataIsNotEmpty(res, shortDescription));
//  If you want to throw an error and stop the process if no data is returned, uncomment the line above

// Remember to add parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty to the helper functions section
