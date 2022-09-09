print5();
print10();
for(var i = 0;  i<5; i++){
    console.log(i);
}
console.log('outside',i);
for(let j = 0;  j<5; j++){
    console.log(j);
}
console.log('outsjde',j);

function print5(){
    console.log('inside print5',5);
}

var print10 = ()=>{
    console.log('Print Five', 5);
}