// Задание 2

let x = 4;

if (typeof x == 'number' && !isNaN(x)) {
console.log('This is number');
} else if (typeof x == 'boolean') {
console.log('This is boolean');
} else if (typeof x == 'string') {
console.log('This is string');
} else {
console.log('type is not defined');
}