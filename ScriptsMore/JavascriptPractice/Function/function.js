function Person(name,color,subject,dob){
    this.name=name;
    this.color=color;
    this.subject=subject;
    this.dob=new Date(dob)
  



}

const person2=new Person("Puja","White","JavaScript",01-12-2000);
console.log(person2.dob.getFullYear());

