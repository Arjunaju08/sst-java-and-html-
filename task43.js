const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
        x.question("enter the name:",(a)=>{
    const re=function(x)
    {
        let res=(x);
        return res;
    }

    
        var result=re(a);
        console.log(" hello "+ result);
        
    x.close()
});