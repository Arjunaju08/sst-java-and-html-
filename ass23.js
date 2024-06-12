const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the students name:",(a)=>{ 
    x.question("enter the roll  num:",(b)=>{ 
        x.question("enter the age:",(c)=>{ 
            x.question("enter the class:",(d)=>{ 

                var details={
                   name:(a),
                    roll:(b),
                    age:(c),
                    class:(d),
                }

                     function students(){
                        console.log( details);
                     }
                
                students();
            x.close();
            });
        });
    });
});

    