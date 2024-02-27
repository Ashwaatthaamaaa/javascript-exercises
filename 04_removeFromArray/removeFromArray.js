const removeFromArray = function(array,...theArgs) {
    let workArr=[];
    function remove(array,element){
        let workArr=[];
            for(let i = 0; i < array.length ; i++)
                if (!(array[i] === element)) { 
                     workArr.push(array[i]);
                    //console.log("Removed element: " + spliced); 
                    //console.log("Remaining elements: " + arr); 
                } 
        return workArr;
    }
    
    for(let i=0;i<theArgs.length;i++)
    {
        workArr = remove(array,theArgs[i]);
        array=workArr;
    }
    
    return workArr;




};

// Do not edit below this line
module.exports = removeFromArray;
