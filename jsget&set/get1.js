class Person{
    constructor(name,age,city){
        this.name = name
        this.age = age
        this.city = city
    }
    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._newName = newName;
        }else{
            console.error("invalid");
        }
    }
    get(){
        return this._newName;
    }
}
const p1 = new Person("uday","aaa",-0);
