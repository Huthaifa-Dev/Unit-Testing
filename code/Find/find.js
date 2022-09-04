const find = (array, callback) => {

    for (let item of array) {
        //if there an item in the array then return it
        if (callback.call(this, item)) {
            return item;
        }
    }
    // if there is no element in the array applies to callback return undefined
    return undefined;

}

module.exports = find;