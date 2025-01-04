const hello = () =>{
    console.log("hello moron");
}
hello(); 

const byname = (name,age) =>{
    console.log(`hello ${name}`);
    console.log(`youe age is ${age}`)
}
byname("uday",19);

const num = [1,2,3,4,5,6,7,8,9]

const power = num.map((element) => Math.pow(element,2))
const add = num.reduce ((accumulator,element) => accumulator + element);
console.log(add);