class Car
{
    constructor(name,year){
        this.name=name;
        this.year=year;

    }

 age(){ 
    const date=new Date();
    return date.getFullYear()-this.year
 }
}
    const mycar=new Car("ford",20004);
    console.log("my car is"+mycar.age()+"years old");
 