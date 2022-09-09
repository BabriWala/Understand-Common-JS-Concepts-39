// Non - Primitive Value Reference Dhore Rakhe ar Primitive Value Dhore Rakhena 


const city = {name: 'Dahaka', located: 'Bangladesh'};
const newCity = city;
console.log(city, newCity);
newCity.located = 'America';
console.log(city, newCity)