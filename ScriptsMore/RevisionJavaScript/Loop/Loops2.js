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


id:3,
work:"Do a project",
isDone:true
}
];



// // Map

const myTodos=todos.map(function(todo){

return todo.work;


});
console.log(myTodos)



// Filter

const myTask=todos.filter(function(todo){

    return todo.isDone==true;
}).map(function(done){
    return done.work;
    


});
console.log(myTask)





