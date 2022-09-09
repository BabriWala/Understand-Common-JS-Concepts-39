// primitve types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a=25;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);
// console.log(output)

let student1 = {name:'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner:'anika'};
// Object and array ar pass by reference
function makeMovie(couple1, couple2){
    couple1.name = 'ononto';
    couple2.partner = 'mim';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

// Jodi function er modde kono nonprimitive value pass kore oi function er modde oi prameter k change korle main value tao change hoye jabe