class product{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
        res(){
            let area=(this.a*this.b)
            return area;
        }
    
        }
        const resul=new product(6,8)
        console.log("the product of"+resul.res());
