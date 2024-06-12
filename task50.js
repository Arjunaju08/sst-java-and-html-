function greet(name,callback)
{
    console.log(" hello "+name);
    callback();
}
function saygoodbye()

{
    console.log( "podi");
}
greet( " alice ",saygoodbye)