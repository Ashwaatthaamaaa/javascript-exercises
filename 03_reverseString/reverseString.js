const reverseString = function(string) {
    let array = string.split("");
    let reversedString = "";
    let i = string.length-1;
    while(i >= 0){
        reversedString = reversedString + array[i];
        i--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
