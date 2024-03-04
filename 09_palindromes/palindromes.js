const palindromes = function (string) {
    let arrayString = string.toLowerCase().split('');
    arrayString = arrayString.filter((char) => /^[a-zA-Z0-9]+$/.test(char) );
    let reverseString = arrayString.slice().reverse();
    return     arrayString.join("") === reverseString.join("");

};



// Do not edit below this line
module.exports = palindromes;
