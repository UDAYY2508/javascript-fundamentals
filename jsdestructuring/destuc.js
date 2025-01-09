let q = 22;
let p = 10;
[q,p] = [p,q]
console.log(q);
console.log(p);

const col = ["red","blue","black","white"];

[col[0],col[3]] = [col[3],col[0]]
console.log(col);

const[fcol,scol,tcol,...extra] = col;
console.log(extra);