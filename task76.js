const person={
    firstname:"aju",
    lastname:"r",
    full:function(){
        return this.firstname+ " "+this.lastname;

    }
}
const member={
    firstname:"hege",
    lastname:"nilsen",
    
}
 let fullname=person.full.bind(member);
 console.log(fullname());