function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer)
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())


// Akta Function er modde arekta function takle oita tar uporer function er variable er access pabe 
// and eigulo protibari tar instance sheet korbe