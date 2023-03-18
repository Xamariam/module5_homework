// Задание 8 

let myMap = new Map();
myMap.set('item', 'prop');
myMap.set(3, 'prop3');
myMap.set(true, 332);

for (let name of myMap.keys()) {
    console.log('Ключ — ', name,', значение —', myMap.get(name))
}