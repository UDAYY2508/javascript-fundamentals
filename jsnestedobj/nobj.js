const person ={
    fname : "bobby",
    age : 22,
    isSTUD: true,
    hobbies : ["workout","swimming","hikeing"],
    addrs:{
        home : "2block",
        city : "minecraft",
        road :"toHell"
    }
}
for(const prop in person.addrs){
    console.log(person.addrs[prop]);
}

console.log(person.addrs.home);
console.log(person.hobbies[1]);