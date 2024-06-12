

function outerfunction(){
let outervarible='i am outstanding';
    function innerfunction()
    {
        console.log(outervarible);
    }
    return innerfunction;
}
const clousre=outerfunction();
clousre();