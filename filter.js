const numbers = [12, 34, 22, 6, 8, 14, 26];
const bigNums = numbers.filter(number => number > 20);
// < less than
// > getter than
console.log(bigNums);
const tiny = numbers.filter(number => number < 20);
console.log(tiny);
const even = numbers.filter(num => num % 3 === 0)
console.log(even);




const products = [
    {id : 1, name: 'mobile', price: 6000},
    {id : 2, name: 'car', price: 60000},
    {id : 3, name: 'money-bag', price: 600},
    {id : 4, name: 'watch', price: 1600},
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);