const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the year :",(a)=>{

    const rs=new Date();
    age=rs.getFullYear()-a;
    console.log(age)

    x.close();
});
