const siteName = "siteName"; // Place this variable in "Configurable Variables"
const shortDescription = `Get site ${siteName}`;
const getSiteParams = {
    // Query to search for the site name
    q: `name eq '${siteName}'`,
    // Fields to return
    fields: `id,name`,
};

const getSiteRes = await vvClient.sites
    .getSites(getSiteParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteGUID = getSiteRes.data[0].id;
