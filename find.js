const numbers = [12, 5, 15, 6, 8, 14, 26];
const fives = numbers.find(num => num % 5 === 0)
console.log(fives);



const products = [
    {id : 1, name: 'mobile', price: 6000},
    {id : 2, name: 'car', price: 60000},
    {id : 3, name: 'money-bag', price: 600},
    {id : 4, name: 'watch', price: 1600},
];
const cheap = products.find(pro => pro.price > 600);
console.log(cheap)