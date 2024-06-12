const x=require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the limit of number:",(limit)=>{
    x.question("enter the num:",(num)=>{ 
    let arra=[];


   // for( var i=0;i<limit;i++)
     //   {
            
        
           arra.push(num);
           num++;
       // }
        console.log(arra);
        
    });
});


