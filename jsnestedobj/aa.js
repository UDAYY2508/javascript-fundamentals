class Person{
    constructor(name,age,...addrs){
        this.name = name
        this.age = age
        this.addrs = new Addrs(...addrs)
    }
}

class Addrs{
    constructor(city,road,country){
        this.city= city
        this.road = road
        this.country = country
    }
}

const a1 = new Addrs("pune","link road","ind")
const p1 = new Person("bob",22,"pune","link road","ind")
const p2 = new Person("pat",24,"euu","k road","ind")

console.log(p1.addrs.country);
console.log(p2.addrs.city);