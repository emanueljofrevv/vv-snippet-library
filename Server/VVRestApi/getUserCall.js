/*
getUser returns information of a given user using its userID (example mauricio.tolosa@onetree.com)
this can be passed from a form into a web service using a drop down that has the User Lookup query enabled, 
(it'll list all the available users on a given VV installation)
*/

const userID = "user@id.com";
const shortDescriptionGetUser = `getUser for userID  ${userID}`;
const getUserQuery = {
    q: `[userid] eq '${userID}'`,
    expand: "true",
};

const getUserResp = await vvClient.users
    .getUser(getUserQuery)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescriptionGetUser))
    .then((res) => checkDataPropertyExists(res, shortDescriptionGetUser))
    .then((res) => checkDataIsNotEmpty(res, shortDescriptionGetUser));
