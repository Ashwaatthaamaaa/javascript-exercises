const sumAll = function(a,b) {
    if(!(Number.isInteger(a) && Number.isInteger(b)) || (a<0 || b<0)){return "ERROR"}
    let num1=a;
    let num2=b;
    if(a>b)
    {
        num2=a;
        num1=b;        
    }
    let sum = 0;
    for(let i=num1;i<=num2;i++)
    {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
