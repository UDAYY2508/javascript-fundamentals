const num =[3,4,5,6,7,8]

const power = num.map(function(element){
    return Math.pow(element,2)
})
const even = num.map(function(element){
    return element % 2 === 0; 
})
const odd = num.filter(function(element){
    return element % 2 !== 0; 
})
const add = num.reduce(function(accumulator,element){
    return accumulator + element
})
console.log(add);