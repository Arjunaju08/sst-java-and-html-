var arr1=[1,2,3,4,5];
var arr2=[2,3,4,5,6];
var combine=[];
for(i=0;i<arr1.length;i++)
{
    combine[combine.length]=arr1[i];
}
for(j=0;j<arr2.length;j++)
{
    combine[combine.length]=arr2[j];
}
var uniqu=[];
for(l=0;l<combine.length;l++)
{
var elememt=combine[l]                    
var count=0;

for(var k=0;k<combine.length;k++)
if( combine[k]===elememt){ 
count++;
}
                
if (count===1){
uniqu[uniqu.length]=elememt;
}
}
console.log(uniqu);


