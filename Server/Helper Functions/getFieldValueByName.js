function getFieldValueByName(fieldName, isRequired = true) {
    /*
  Check if a field was passed in the request and get its value
  Parameters:
      fieldName: The name of the field to be checked
      isRequired: If the field is required or not
  */

    let resp = null;

    try {
        // Tries to get the field from the passed in arguments
        const field = ffCollection.getFormFieldByName(fieldName);

        if (!field && isRequired) {
            throw new Error(`The field '${fieldName}' was not found.`);
        } else if (field) {
            // If the field was found, get its value
            let fieldValue = field.value ? field.value : null;

            if (typeof fieldValue === "string") {
                // Remove any leading or trailing spaces
                fieldValue.trim();
            }

            if (fieldValue) {
                // Sets the field value to the response
                resp = fieldValue;
            } else if (isRequired) {
                // If the field is required and has no value, throw an error
                throw new Error(`The value property for the field '${fieldName}' was not found or is empty.`);
            }
        }
    } catch (error) {
        // If an error was thrown, add it to the error log
        errorLog.push(error);
    }
    return resp;
}
