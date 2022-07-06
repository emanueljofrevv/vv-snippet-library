// To implement any of the following examples, create the query in VV first
// and replace the query name with the name of your query and modify the data object to fit your needs.

// Custom Query Example 1:
// SELECT * FROM [Template Name]

const queryName1 = "customQueryTest1";
shortDescription = "Custom Query using filter parameter for backward compatibility";
const customQueryData = {
    filter: "[columnName] = 'value'",
};

const customQueryResp = await vvClient.customQuery
    .getCustomQueryResultsByName(queryName1, customQueryData)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Custom Query Example 2:
// SELECT * FROM [Template Name] WHERE [Column Name] = @someParameter AND [Another Column Name] = @someOtherParameter

const queryName2 = "customQueryTest2";
shortDescription = "Custom Query using SQL Parameters";
const customQueryData = {
    // params value must be a stringified array of objects with parameterName and value properties
    params: JSON.stringify([
        {
            parameterName: "someParameter",
            value: "value",
        },
        {
            parameterName: "someOtherParameter",
            value: "value",
        },
    ]),
};

const customQueryResp = await vvClient.customQuery
    .getCustomQueryResultsByName(queryName2, customQueryData)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Custom Query Example 3:
// SELECT * FROM [Template Name] WHERE [Column Name] = @someParameter

const queryName3 = "customQueryTest3";
shortDescription = "Multiple features including: SQL Parameters, Paging, Sorting, and ODATA style Query syntax (q:'')";
const customQueryData = {
    sort: "Column Name", // sort field (tested with dates and strings)
    sortdir: "desc", // sort direction (asc or desc)
    limit: 100, // limit to n records, can be used for paging or select top. Example limit=100, offset=101 would be page 2 of 100 records per page.
    offset: 0, // used for paging, offset is the page start record number
    q: `[Column Name] eq 'some value'`, // q query filter see: https://developer.visualvault.com/api/v1/RestApi/Data/datafilters
    // params value must be a stringified array of objects with parameterName and value properties
    params: JSON.stringify([
        {
            parameterName: "someParameter",
            value: "value",
        },
    ]),
};

const customQueryResp = await vvClient.customQuery
    .getCustomQueryResultsByName(queryName3, customQueryData)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));

// Custom Query Example 4:
// SELECT TOP 3 [Column Name] FROM [Template Name] WHERE [Another Column Name] = @someParameter ORDER BY NewId()

const queryName4 = "customQueryTest4";
shortDescription = "Custom Query using SQL Parameter to get random column values from a form record";
const customQueryData = {
    // params value must be a stringified array of objects with parameterName and value properties
    params: JSON.stringify([
        {
            parameterName: "someParameter",
            value: "value",
        },
    ]),
};

const customQueryResp = await vvClient.customQuery
    .getCustomQueryResultsByName(queryName4, customQueryData)
    .then((res) => parseRes(res))
    .then((res) => checkMetaAndStatus(res, shortDescription))
    .then((res) => checkDataPropertyExists(res, shortDescription))
    .then((res) => checkDataIsNotEmpty(res, shortDescription));
