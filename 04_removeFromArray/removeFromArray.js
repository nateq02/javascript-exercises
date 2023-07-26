const removeFromArray = function(arr, ...args) {
    // Makes a list of arguments to remove from arr
    let toRemove = [...args];

    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (args[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
