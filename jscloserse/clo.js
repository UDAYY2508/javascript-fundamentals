/*function outer(){

    let msg = "hello"
    function inner(){
        console.log(msg);
    }
    inner();
}

outer();*/
////////////////////////////////
/*function create(){
    let count = 0;
    function increment(){
       
        count++;
        console.log(count);
    }
    return{increment}
}
const counter = create();
counter.increment();
counter.increment();*/
////////////////////////////
function outerCloser(){
    let score = 0;
function increase(points){
    score += points;
    console.log(`+${points}pts`);
}
function decrease(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}
    return {increase,decrease,getScore}
}
const game = outerCloser();
game.increase(9);
game.decrease(4);
console.log(`final score is = ${game.getScore()} pts`);