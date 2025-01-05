class Animal{
    alive = true;
    eat(){
        console.log(`the ${this.animalName} is eating`);
    }
    sleep(){
        console.log(`the ${this.animalName} is sleeping`);
    }
}
class Dog extends Animal{
    animalName = "dog"
}
class Cat extends Animal{
    animalName = "cat"
    jump(){
        console.log("cat can jump");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.alive = false 
console.log(cat.alive);
dog.eat();
cat.sleep();
cat.jump();