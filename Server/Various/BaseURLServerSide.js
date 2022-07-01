//Code snippet to help get the Base URL of the solution where the script is running so that URL can be used for links or other purposes.

//Get URL Server Side
let URL = vvClient.getBaseUrl();
let credentials = module.exports.getCredentials();
let customerAlias = credentials.customerAlias;
let databaseAlias = credentials.databaseAlias;
//let baseURL = URL + '/app/' + customerAlias + '/' + databaseAlias;
let baseURL = `${URL}/app/${credentials.customerAlias}/${credentials.databaseAlias}/`;
