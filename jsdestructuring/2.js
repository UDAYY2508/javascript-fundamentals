const p1 = {
    fname : "sparok",
    lname : "xo",
    age : 30,
    job : "spartan"

}
const p2 = {
    fname : "r0ok",
    lname : "xo",
    age : 27,

}
const{fname,lname,age,job="greek"}= p2;

console.log(job);

function displayName({fname,lname}){
    console.log(`name: ${fname} ${lname}`);
}
displayName(p2);