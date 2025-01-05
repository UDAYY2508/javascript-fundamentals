function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`the ${this.make} is on road`);}
}

const car1 = new Car("corvett","v8",2004,"red");
console.log(car1.color);
console.log(car1.year);
console.log(car1.make);
console.log(car1.model);
const car2 = new Car("ferrari","la farrari",1999,"black");
console.log(car2.color);
console.log(car2.year);
console.log(car2.make);
console.log(car2.model);

car1.drive();