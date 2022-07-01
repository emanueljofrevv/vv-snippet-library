// The SiteGUID is the GUID of the site where you want to create the user.The SiteGUID can be acquired using the getSites function.
const siteID = siteGUID;

// Add these variables in Configurable Variables and REMOVE THIS COMMENT
// Characters used for the random password
const passwordChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#%^&*()_+";
// Random password length
const passwordLength = 8;

// Add this function in Helper Functions section of the web service and REMOVE THIS COMMENT
function randomPassword(passwordLength) {
    let password = "";

    // Add a random character from the passwordChars string to the password string
    for (let i = 0; i < passwordLength; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    }

    return password;
}

// userParams can be an empty object
const userParams = {};

// Random password is generated
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
    .postUsers(userParams, newUserObject, siteID)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

const userID = userResp.data.id;
