function greeting(greetingHandler, name){
    greetingHandler(name)
}
// greeting('Halim Mama')
// const name = 'Halim Mia';
// const numbers = [45,54,78];
// const laptop = {name: 'Lenovo', number:500}
function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name)
}

function greetNight(name){
    console.log("Good Night", name);
}

greeting(greetingHandler, 'Sakib')
greeting(greetingHandler, 'Mizan')
greeting(greetingHandler, 'Salim')
greeting(greetEvening, 'Sallu')
greeting(greetNight, 'Sallu')