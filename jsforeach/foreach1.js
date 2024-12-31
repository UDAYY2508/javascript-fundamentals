let fruit = ["apple", "orange","banana","mango"
]
function displayFruit(element){
    console.log(element);
}

function displayuppercase(element,index,array){
    array[index]= element.toUpperCase();
}

fruit.forEach(displayuppercase);
fruit.forEach(displayFruit);


