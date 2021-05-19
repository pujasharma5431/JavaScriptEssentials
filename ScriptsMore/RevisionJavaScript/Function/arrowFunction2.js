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

const myAchieve=todos.filter((todo)=>{
    return todo.isDone==true
}).map((todo)=>{
    return todo.work

})
console.log(myAchieve)
