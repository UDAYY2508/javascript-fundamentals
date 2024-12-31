let num = [1,2,3,4,5,6,7,8,9,10,11,12]

function display (element) {
    console.log(element);
}
function double(element,index,array) {
    array[index] = element * 2;
}
function square(element,index,array) {
    array[index] = Math.pow(element,2);
}
num.forEach(square);
num.forEach(display);
