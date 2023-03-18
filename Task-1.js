// Task 1

let x = +prompt('Please, enter your value:');

if (isNaN(x) !== true && typeof x === 'number') {
    if (x === 0) {
        console.log("Вы ввели ноль или оставили строку пустой!")
    } else if (x % 2 === 0) {
        console.log('Четное');
    } else {
        console.log('Не Четное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}