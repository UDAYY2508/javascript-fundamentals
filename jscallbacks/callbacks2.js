function sum(callback,a, b) {
    let result = a + b;
    callback(result);
}

function add(result){
    console.log(result);
}

sum(addresult,5,6)

function addresult(result){
    document.getElementById('myh1').textContent = result;
}