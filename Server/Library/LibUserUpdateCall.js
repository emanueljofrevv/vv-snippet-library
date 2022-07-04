const shortDescription = `Update user ${Email}`;
const updateUserObject = [
    {
        name: "Action",
        value: "Update",
    },
    {
        name: "User ID",
        value: Email,
    },
    {
        name: "First Name",
        value: FirstName,
    },
    {
        name: "Last Name",
        value: LastName,
    },
    {
        name: "Group List",
        value: groupList,
    },
];

const userUpdateResp = await vvClient.scripts
    .runWebService("LibUserUpdate", updateUserObject)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const userUpdateData = userUpdateResp.data;

if (userUpdateData[0] === "Error") {
    throw new Error(`The call to LibUserUpdate returned with an error. ${userUpdateData[1]}.`);
}
if (userUpdateData[0] !== "Success") {
    throw new Error(`The call to LibUserUpdate returned with an unhandled error.`);
}
