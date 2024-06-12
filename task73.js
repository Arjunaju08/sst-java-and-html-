const person={
    fullname:function(city,country)
  { 
        return this.firstname+" "+city+" "+country;
    }
}
 const perso1={
    firstname:"arjun",
 }
 console.log(person.fullname.apply(perso1,["india","norway"]));