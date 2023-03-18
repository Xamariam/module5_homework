// Задание 6

let arr = [1, 2, 1, 1, 1, 1, 1, 1,];
let result = true;

for (let i = 1; i < arr.length - 1; i++) {
 if (arr[i] !== arr[i + 1]) {
   result = false;
 }
}
console.log(result)