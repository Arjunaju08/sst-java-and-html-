const number=[1,2,3,4,5];
function displaynum(number,index)
{
    console.log("index:"+(index),"value:"+(number));
}
number.forEach(displaynum);