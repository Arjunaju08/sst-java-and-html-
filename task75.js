function hasproprety(obj,prop){
    for(var key in obj){
    if(key===prop){
        return true;

    }
}
return false;
}
 var person={
    name:"john",
    age:30,
    occupation:"engeener"
 };
  var res=hasproprety(person,"name");
  if(res==true)
    {
        console.log("prsent");

    }
    else
    {
        console.log("not present");
    }