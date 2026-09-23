const removeFromArray = function(dataset, ...omit) {
    // let filtered = '';

    const filtered = dataset.filter(element => !omit.includes(element));
    return filtered;
    


};

// Do not edit below this line
module.exports = removeFromArray;
