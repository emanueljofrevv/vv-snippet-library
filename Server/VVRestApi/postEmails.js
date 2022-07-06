const emails = "email1@gmail.com, email2@gmail.com"; // Place this in the 'Configurable Variables' section
const shortDescription = `Send email to ${emails}`;
const emailObj = {
    recipients: emails,
    subject: "Email subject",
    body: "Body can include html <br><br>",
};

const emailResp = await vvClient.email
    .postEmails(null, emailObj)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
