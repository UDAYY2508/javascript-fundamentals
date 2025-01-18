/*let bike = ["kawasaki","honda","bmw s1000rr","panigale"]
bike.sort();
console.log(bike);*/
let num = [1,20,10,11,4,3,5]
num.sort((a,b) => a-b);
console.log(num);

const person  = [{name :"zuddy",age:22,gpa:9.0},
                {name :"maddy",age:22,gpa:10.0},
                {name :"sandy",age:12,gpa:7.0},
                {name :"udy",age:42,gpa:5.44},
]



person.sort((a,b) => a.name.localeCompare(b.name))
console.log(person);