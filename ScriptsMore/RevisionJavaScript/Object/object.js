const person={
    firstName:"puja",
    lastName:"Sharma",

    age:20,
    hobbies:['dancing','Writing'],
    address: {
        street:"Devinagar",
        tole:"Sagarmatha",
    }
}
console.log(person.address.tole);
const { firstName, lastName }=person;
console.log(firstName);

const { address:{tole}}=person;
console.log(tole);
person.email='aahanapoudel2gmail.com'; 
console.log(person);




