const todos=[{
    id:1,
    work:"Go for a dentist",
    isDone:false
},
{
    id:2,
    work:"Do assingments",
    isDone:true,
},{


id:1,
work:"Do a project",
isDone:true
}
];


// // For Loop


for(let i=0; i<todos.length; i++){
    console.log(todos[i].work);
}


// while loop
 let i=0;
 while(i<7)
 {
     console.log(`while Loop continious till ${i}`)
    i++;
 }


for(todo of todos){
    console.log(todo.work)
    console.log(todo.isDone)



}