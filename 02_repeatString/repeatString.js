const repeatString = function(string,time) {
    let repeatedString = "";
    if (time<0) return "ERROR" 
    while(time>0){
        repeatedString = repeatedString + string;
        time--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
