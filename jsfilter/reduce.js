
const words = ["uday","bob","simon","lily","chirstopher"];

const price =[10,40,50,60,35];

const total = price.reduce(sum)
console.log(total);
function sum(accumulator,element){
    return accumulator + element;
}