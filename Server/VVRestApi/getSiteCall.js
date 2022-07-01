// Place this variable in "Configurable Variables"
const siteName = "siteName";

const shortDescription = `Get site ${siteName}`;
const siteSearchObject = {
    // Query to search for the site name
    q: `name eq '${siteName}'`,
    // Fields to return
    fields: `id,name`,
};

const getSiteRes = await vvClient.sites
    .getSites(siteSearchObject)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    // Comment or delete the line bellow if you don't want to throw an error if the site doesn't exist.
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteGUID = getSiteRes.data[0].id;
