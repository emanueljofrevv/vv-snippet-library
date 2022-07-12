/*
    Script Name:   AddToolTip
    Customer:      VisualVault
    Purpose:       The purpose of this function is to add a tooltip to a label control
                    
    Parameters:    The following represent variables passed into the function: labelText,keyWord,toolTip  
                    labelText: passed string value that represents the 'Text' property from the label control.
                    keyWord: passed string value that indicates to which word the tooltip has to be added.
                    toolTip: passed string value that represents the text of the tooltip created.
                    USE: it is recommended to put the function the onLoad event of the form.
    Return Value:  The following represents the value being returned from this function:
                    -No value is returned. 
                           
    Date of Dev:   07/11/2022
    Last Rev Date: 07/11/2022
    Revision Notes:
    07/11/2022 - Franco Petosa Ayala: Initial creation of the business process. 
*/

//get all span elements on the DOM
const spanList = document.querySelectorAll("span");

//get the searched span using the label text as an identifier
const textElement = [...spanList].filter( span => span.innerText === labelText)[0];

//get the parent node and add requiered css style
const parentNode = textElement.parentNode;
parentNode.style.display = "flex";
parentNode.style.gap = "5px";
textElement.style.width = "auto";

//buil-up an array base on the labelText words
const arrWord = labelText.split(" ");

//build-up an array of span elements
const nodeList = arrWord.map(word => {
    const spanElement = textElement.cloneNode(false); //heritace css styles 
    if(word === keyWord){
        spanElement.innerText = keyWord;
        spanElement.title = toolTip;
        spanElement.style.textDecoration = 'underline';
    }else{
        spanElement.innerText = word;
    }
    return spanElement
});

//remove the initial label text
textElement.remove();

//insert the new elements to the parent node
nodeList.forEach( node => {
    parentNode.append(node);
})
