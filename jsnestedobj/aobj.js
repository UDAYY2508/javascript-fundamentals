const personobj = [{name : "udy",city:"pune",age:22},
            {name : "bob",city:"pune",age:24},
            {name : "max",city:"chicago",age:30},
            {name : "andy",city:"ny",age:12},
            {name : "rudy",city:"w.dc",age:32}];
console.log(personobj[4].age);
personobj.push({name:"patrick",city:"ktown",age:77})
console.log(personobj);
personobj.pop();

personobj.forEach (personob => console.log(personob.name));