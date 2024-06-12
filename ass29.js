class calc{
    constructor(a,b){

        this.a=a;
        this.b=b;
    }
    add(){
        const addres=this.a+this.b;
        return addres;
    }
    sub(){
        const subres=this.a-this.b;
        return subres;
    }
    mul(){
        const mulres=this.a*this.b;
        return mulres;

    }
    div(){
        const divres=this.a/this.b
        return divres;
    }
}
const result=new calc(10,5)
console.log(result.add());
console.log(result.sub());
console.log(result.mul());
console.log(result.div());