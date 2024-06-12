

const re=function(x)
{
let result=x.split('').reverse().join('')
if (x===result)
    {
        console.log(x);
       console.log(result);
        res= "is a palidrome";
        var m=x+res;
        return m;
    }
  
else
{    res="is not palidrome";
var n=x+res;
    return n;

  
};
}
var res;
var resu=re("hello");

 console.log(resu);