/*const person ={
    name: 'uday',
    age : 13,
    percentage : 8.4,
    city : "pune",
    isStudent : true,
    sayHello(){console.log("hello i am uday");}

}
const person1 ={
    name : "bob",
    age : 15,
    percentage : 9.2,
    city : "mumbai",
    isStudent : false,
    sayHello:() => {console.log("hello i am bobby");},
}
console.log(`name is ${person.name}`);
person1.sayHello();*/

const person2 = {
    name: 'john',
    age : 12,
    percentage : 7.8,
    city : "bangalore",
    isStudent : true,
    sayHello: function(){console.log(`i amm ${this.name}`);}
}
person2.sayHello();