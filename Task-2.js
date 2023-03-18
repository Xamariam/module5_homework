// Задание 2

let x = 4;

if (typeof x == 'number' && !isNaN(x)) {
alert ('This is number');
} else if (typeof x == 'boolean') {
alert ('This is boolean');
} else if (typeof x == 'string') {
alert ('This is string');
} else {
alert ('type is not defined');
}