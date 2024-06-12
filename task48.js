function rvm(pri){
car.price=25000;
console.log("inside funtion:", car.price);
}
let car=
{
    model:"toyota",
    price:200000,

};
console.log("before calling car model",car.model);
console.log(" befor calling car price:",car.price);
rvm(car)
console.log("after calling car moidel:",car.model);
console.log(" after calling car prioce:",car.price);