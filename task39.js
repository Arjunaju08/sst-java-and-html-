const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the float number:",(a)=>{
   
    function si()
    {
        let n=parseInt(a)
      return  n;
    }
    var res=si(a)
    console.log(res)
    x.close();
});