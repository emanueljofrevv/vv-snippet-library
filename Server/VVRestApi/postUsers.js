// GET SITE ID

const siteName = "siteName"; // Place this variable in "Configurable Variables"
let shortDescription = `Get site ${siteName}`;
const getSiteParams = {
  q: `name eq '${siteName}'`, // Query to search for the site name
  fields: `id,name`, // Fields to return
};

const getSiteRes = await vvClient.sites
  .getSites(getSiteParams)
  .then((res) => parseRes(res))
  .then((res) => checkMetaAndStatus(res, shortDescription))
  .then((res) => checkDataPropertyExists(res, shortDescription))
  .then((res) => checkDataIsNotEmpty(res, shortDescription));

const siteGUID = getSiteRes.data[0].id;

// CREATE NEW USER

shortDescription = `Create user on site ${siteName}`;
const userParams = {}; // userParams can be an empty object
const passwordLength = 8; // Random password length
const pass = randomPassword(passwordLength);
const newUserObject = {
    userid: "test@onetree.com",
    firstName: "First",
    middleInitial: "M",
    lastName: "Last",
    emailaddress: "test@onetree.com",
    password: pass,
    mustChangePassword: "false",
};

const userResp = await vvClient.users
    .postUsers(userParams, newUserObject, siteGUID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
    
const newUserGUID = userResp.data.id;
    
// Add this function in Helper Functions section of the web service and REMOVE THIS COMMENT
function randomPassword(passwordLength) {
    // Characters used for the random password
    const passwordChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#%^&*()_+";
    let password = "";

    // Add a random character from the passwordChars string to the password string
    for (let i = 0; i < passwordLength; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    }

    return password;
}