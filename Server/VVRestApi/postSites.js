const newSiteName = "Site Name"; // Place this in the 'Configurable Variables' section
const newSiteDescription = "Site Description"; // Place this in the 'Configurable Variables' section

const shortDescription = `Post site ${newSiteName}`;
const newSiteData = {
    name: newSiteName,
    description: newSiteDescription,
};

const postSiteRes = await vvClient.sites
    .postSites(null, newSiteData)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const newSiteID = postSiteRes.data.id;