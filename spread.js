const numbers = [23, 12, 34, 21, 33, 5, 67, 13];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(12, 33, 76, 23);

const maxInArray = Math.max(...numbers);
console.log(maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(51);
console.log(numbers);
console.log(numbers2);




// question
function add(a, b = 9) {
    return a + b;
}
const total = add(2, 7);
console.log(total);

const y = x => x * x;
const x = y(5);
console.log(x);

const name = 'Hero';
const greetings = 'Welcome Home!' + ' ' + name;

const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
console.log(newCars);
