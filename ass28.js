class sum{
    constructor(x){
        this.x=x;
    }

newsr()
{ 

var result=0;
while( this.x>0)
    {
 
    result+=(this.x%10);
    this.x=parseInt(this.x/10)
    }
    return result;
 }
}
    const ans=new sum(123);
console.log("sum is"+ans.newsr());

