const groups = `'GroupName1','GroupName2'`;
const shortDescription = `Get groups data for: ${groups}`;
const getGroupsParams = {
    q: `name In ('${groups}')`,
};

const getGroupsRes = await vvClient.groups
    .getGroups(getGroupsParams)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const groupsData = getGroupsResponse.data;
