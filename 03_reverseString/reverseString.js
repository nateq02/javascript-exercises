const reverseString = function(string) {
    let ori_list = string.split('');
    let new_list = [];

    for (let i = 1; i <= ori_list.length; i++) {
        new_list.push(ori_list[ori_list.length - i]);
    }
    let new_string = '';
    for (let i = 0; i < new_list.length; i++){
        new_string += new_list[i];
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
