// 8 Ways To GEt Undefined
/**
 * Variable That is not intialized will give undefined
 * Function With No Return 
 * Parameter thst is not passed will be undefined
 * If return has nothing on the right side will return undefined
 * Property That doesnt exists on an object will give you undefined
 * Accessing array elements outside of the index range will give you undefined
 * Deleting an element inside an array
 * Set a Value Directly to Undefined
 * 
 * null is object
 */

let name;
console.log(name)
function second(a, b){
    const total = a + b;
}
const result = second(5,10);
console.log(result);
function third(a, b, c, d, e,){
    const total  = a + b;
}
const result2 = third(5,6);
console.log(result2);
function noNegative(a, b){
    if(a<0 || b<0){
        return;
    }
    return a+ b;
}
console.log(noNegative(-5,5))
const fifth = {id: 2, name:"Kolim Uddin", age: 45}
console.log(fifth.name, fifth.salary);
const sixth = [4,44,4,48,4,4444,4];
// You should not do it. Instead use splice
delete sixth[1]
console.log(sixth[1], sixth[5], sixth[50]);
console.log(sixth)

const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null};
console.log(typeof undefined);
console.log(typeof null);