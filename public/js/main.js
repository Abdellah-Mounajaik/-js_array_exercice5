let variable = "variable2"
let tabExo = ["coding17", "variable", 5, 10, true ]
console.log(tabExo);
console.log(tabExo.length);
tabExo.pop()
console.log(tabExo);
tabExo.shift()
console.log(tabExo);
tabExo.push("coding15", "coding16")
console.log(tabExo);
tabExo.unshift("coding12", "coding13", "coding14")
console.log(tabExo);
tabExo.reverse()
console.log(tabExo);

let chambre = ["farde", "carte",];
alert([chambre]);
chambre.unshift("enveloppes")
alert([chambre]);
chambre.push("crayon", "gomme", "effaceur")
alert([chambre]);
chambre.splice(0, 3, "bic");
alert([chambre]);
alert([chambre.length]);
chambre.splice(-2, 2);
alert([chambre]);
chambre.splice(0, 2);
alert([chambre]);
