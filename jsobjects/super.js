class Animal{
    constructor(name,age){
        this.age = age;
        this.name = name;
    }
    move(){
        console.log(`the animal moves at speed of ${this.speed}`);
    }
}
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
       
        this.speed = speed;
    }
    run(){
        super.move();
        
    }
    
}
class Bear extends Animal{
    constructor(name,age,speed){
        super(name,age);
       
        this.speed = speed;
    }
}
class Cat extends Animal{
    constructor(name,age,jumps){
        super(name,age);
    
        this.jumps = jumps;
    }
}
const cat = new Cat("meowmeow",12,3);
const bear = new Bear("teddy",22,43);
const dog = new Dog("rocky",15,13);
console.log(dog.age);
dog.run();