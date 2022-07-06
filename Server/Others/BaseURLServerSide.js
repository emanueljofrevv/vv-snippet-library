const URL = vvClient.getBaseUrl();
const credentials = module.exports.getCredentials();
const customerAlias = credentials.customerAlias;
const databaseAlias = credentials.databaseAlias;
const baseURL = `${URL}/app/${credentials.customerAlias}/${credentials.databaseAlias}/`;
