/*
    Use this snippet to run and debug locally 2 chained Web Services
 
    WS1: Web Service containing the runWebService call
    WS2: Web Service Being called from WS 1
 
    How to use:
    1- Insert in WS1 the snippet "Locally Run & Debug Chained Web Services - Call"
    2- Comment out any appearance of the line response.json(200, outputCollection);
    3- Add the code of this snippet in WS2 wherever is indicated in the comments
    
    Before posting the WS into VV:
    1- Uncomment the line response.json(200, outputCollection);
    2- Comment out/deletet the code for this snippet
*/

let webServiceRes = {};

try {
    
    // This code should be added at the end of the main try section.
    webServiceRes = {
        meta: {
            method: "POST",
            status: 200,
            statusMsg: "OK",
        },
        data: outputCollection
    };
} catch (error) {
    
    // This code should be added in the catch section.
     webServiceRes = {
        meta: {
            errors: error.message,
            method: "POST",
            status: 400,
            statusMsg: "ERROR",
        },
        data: errorLog
    };
} finally {
    /*
    This code should be added in the finally section or wherever is a response.json call
    This code should replace the statement: return response.json(200).
    */
    return webServiceRes;
    //response.json(200, outputCollection);
}
