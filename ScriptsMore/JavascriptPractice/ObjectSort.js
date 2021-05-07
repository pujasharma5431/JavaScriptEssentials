var fruit=[{

    name:"kiwi",
    price:"50"
},

{
    name:"Mango",
    price:"30"


},
{
    name:"Graves",
    price:"30"


},
{
    name:"Graphes",
    price:"30"


},
{
    name:"Watermelon",
    price:"40"


},

]
// fruit.sort(function(a,b){
//     return(a.price-b.price)
// })


function compare(a,b)
{
    var x=a.name.toUpperCase()
var y=b.name.toUpperCase()
   
    if(x>y)
    {
        return 1;

    }
    if(x<y)
    {
        return -1;
    }
   
        return 0;
    }

fruit.sort(compare)
console.log(fruit)