/*let num = [1, 2, 3, 4, 5, 6, 7, 8]
let evennum = num.filter(even);
let oddnum = num.filter(odd);
function even (element){
    return element % 2 === 0;
}

function odd (element){
    return element % 2 !== 0;
}
console.log(evennum);
console.log(oddnum);

const ages = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const voters = ages.filter(canvote);
const nonvoters = ages.filter(cantvote);
function canvote(element){
    return element >= 18;
} 
function cantvote(element){
    return element < 18;
} 

console.log(voters);
console.log(`cant vote ${nonvoters}`);*/

const words = ["uday","bob","simon","lily","chirstopher"];

const word = words.filter(lenMoreThenFour);

console.log(word);

function lenLessThenFour(element){
    return element.length < 4;
}
function lenMoreThenFour(element){
    return element.length > 4;
}
