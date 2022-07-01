function getKeyName(object, key) {
    /*
    Returns the name of a key in an object even if the key is not in the same case.
    E.g. if you pass the key "First Name", it will return the matching key "first Name" if it existed 
    Parameters:
            object: JS object
            key: Name of the key to find
    */
    let searchResult;

    try {
        if (object[key]) {
            searchResult = key;
        } else {
            searchResult = Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
        }
        if (!searchResult) {
            throw new Error(`The property ${key} was not found when searching an object.`);
        }
        return searchResult;
    } catch (error) {
        errorLog.push(error);
    }
}
