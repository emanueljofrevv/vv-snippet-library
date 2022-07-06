const shortDescription = `Get form templates`

const getFormTemplatesRes = await vvClient.forms
    .getFormTemplates(null)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription));
// .then((res) => checkDataIsNotEmpty(res, shortDescription));
// If you want to throw an error and stop the process if no data is returned, uncomment the line above
