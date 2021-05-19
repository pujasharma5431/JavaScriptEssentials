// map
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

// map
const myTask=todos.map((todo)=> todo.work


);
console.log(myTask);


// filter


const myAchieve=todos.filter((todo)=>{
    return todo.isDone==true

});
console.log(myAchieve);



