/*
    Use this snippet to run and debug locally 2 chained Web Services
 
    WS1: Web Service containing the runWebService call
    WS2: Web Service Being called from WS 1
 
    How to use:
    1- Insert in WS1 the snippet "Locally Run & Debug Chained Web Services - Call"
    2- Comment out any appearance of the line response.json(200, outputCollection);
    3- Add the code of this snippet where is indicated in the comments
    
    Before posting the WS into VV:
    1- Uncomment the line response.json(200, outputCollection);
    2- Comment out the code for this snippet
 
    Parameters:
        respWebService - (Object): Contains the response status and message to return. 
        outputCollection - (Array): Contains the Success message and extra data to return.
*/
let respWebService = {
    meta: null,
    data: null,
};
let outputCollection = [];

try {
    /*
        This code should be added in the main try section.
    */
    outputCollection[0] = "Success";
    outputCollection[1] = "Message";
    outputCollection[2] = []; //Extra Data

    respWebService.meta = {
        method: "POST",
        status: 200,
        statusMsg: "OK",
    };
    respWebService.data = outputCollection;
} catch (error) {
    /*
        This code should be added in the catch section.
        This code should replace the statement: return response.json(200).
    */
    respWebService.meta = {
        errors: error.message,
        method: "POST",
        status: 400,
        statusMsg: "ERROR",
    };
} finally {
    /*
        This code should be added in the finally section or wherever is a response.json call
        This code should replace the statement: return response.json(200).
    */
    return respWebService;
    //response.json(200, outputCollection);
}
