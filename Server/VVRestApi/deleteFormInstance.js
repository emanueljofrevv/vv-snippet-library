const recordGUID = "6B29FC40-CA47-1067-B31D-00DD010662BC";
const shortDescription = `Deleting form: ${recordGUID}`;

await vvClient.forms
    .deleteFormInstance(recordGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription));
