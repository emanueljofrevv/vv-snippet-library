const newFormTemplateName = "Template Name"; // This variable should be in the Configurable Variables section

const shortDescription = `Post form ${newFormTemplateName}`;

// The following data is an example. You should use the required data for your use case.
const newFormData = {
    "Agency Administrator": "Some value",
    "Agency ID": aVariable,
    "Agency or LES Program": AgencyLegalName,
    "Agency Selected": agencySelected,
    "Employee First Name": FirstName,
    "Employee Last Name": LastName,
    "Provider ID": IndividualRecordFormID,
    "Start Date": moment().format("L"),
    ddEmployeeType: employeeType,
    Email: Email,
    Status: status,
};

const postFormsRes = await vvClient.forms
    .postForms(null, newFormData, newFormTemplateName)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Remember to add the helper functions parseRes, checkMetaAndStatus, checkDataPropertyExists and checkDataIsNotEmpty
