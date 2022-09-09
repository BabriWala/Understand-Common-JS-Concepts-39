function sum(a, b, c){
    // Arguments sudu function er moddei pawa jabe
    // console.log(arguments);
    // Array Like Objects
    // arguments  er modde for loop calano jabe
    // console.log(arguments[4])
    // console.log(typeof arguments);

    const args = [...arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(10.10,10,10,20,20,30,40);
console.log(total)
console.log(sum.length);