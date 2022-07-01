const newSiteName = "EmaSiteTest2"; // Place this in the 'Configurable Variables' section
const newSiteDescription = "EmaSiteTest2 Description"; // Place this in the 'Configurable Variables' section

let shortDescription = `Post site ${newSiteName}`;
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

// Remember to add the helper functions parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty
