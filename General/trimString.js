// Take a string and return it's trimmed value. Will return an empty string if a string isn't passed in. Field values can be stored as null in the database so this provides extra protection rather than using trim() directly.
function trimStr(strValue) {
    let trimmedStr;
    if (typeof strValue === "string") {
        trimmedStr = strValue.trim();
    } else {
        trimmedStr = "";
    }
    return trimmedStr;
}
