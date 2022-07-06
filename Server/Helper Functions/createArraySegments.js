function createArraySegments(inputArray, segmentSize) {
    // Creates an array of arrays of size segmentSize
    function reducer(previousValue, currentValue, index) {
        const segmentIndex = Math.floor(index / segmentSize);

        // If there is no array(segment) at this index, create one
        if (!previousValue[segmentIndex]) {
            previousValue[segmentIndex] = [];
        }

        // Add the current value to the array(segment)
        previousValue[segmentIndex].push(currentValue);

        return previousValue;
    }

    const initialValue = [];

    const segmentedArray = inputArray.reduce(reducer, initialValue);

    return segmentedArray;
}
