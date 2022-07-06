    /*
    Use this snippet to run and debug locally 2 chained Web Services

    WS1: Web Service containing the runWebService call
    WS2: Web Service Being called from WS 1
        
    How to use:
    1- Create the files for WS1 and WS2 in your local environment
    1- Comment the following line out in the WS1 code: await vvClient.scripts.runWebService("SecondWebService", parametersObj)
    2- Add this code before the commented out line
    3- Replace parametersObj variable for the variable you were using as second parameter in runWebService method
    4- Replace SecondWebService.js for the name of the WS2 file
    5- Insert snippet "Locally Run & Debug Chained Web Services - Response" in WS2
    6- Run the code and debug the web service.
     
    Before posting the WS into VV:
    1- Uncomment the line await vvClient.scripts.runWebService("SecondWebService", parametersObj)
    2- Comment out/delete the code for this snippet
    
    Parameters:
        parametersObj - (Array): This Array should contain all the information requested by the Script that is going to be executed
        in the following format:
        [
            {
                name: "nameOfParameter",
                value: "valueOfParameter"
            }
        ]
*/
const clientLibrary = require("../VVRestApi");
const scriptToExecute = require("../files/SecondWebService.js");
const ffcol = new clientLibrary.forms.formFieldCollection(parametersObj);
const runWebServiceResp = await scriptToExecute.main(ffcol, vvClient, response);
