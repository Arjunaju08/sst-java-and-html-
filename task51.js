const greet=function(name){
    return"hello"+name+"!";

};
    function displaygreeting(greetfunction){
        console.log(greetfunction("john"));
    }

            console.log(greet("alice"));
            displaygreeting(greet);
    