/**
 * Truthy: 
 * true
 * any number (+ve, -ve) will be truthy other than 0;
 * any string other than empty string
 * '0'
 * {}
 * []
 * 
 * Falsy:
 * False
 * ''
 * Undefined
 * null
 */
// const x = false;
// const x = 0;
// const x = 's';
// const x = '';
// const x = ' ';

const x = '';
if(x){
    console.log('value of x is true');
}else{
    console.log('Value of x is falsy');
}

// Optional 
// Check Falsy
// !y = false = true 
// 

const y = '';
if(!y){
    console.log("Value is false");
}
const z = '  ';
// Check True
if(!!z){
    console.log("Value is Truthy")
}
