// Задание 5.7 (8)
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let myMap = new Map([
    ["Color Yellow", true],
    ["Color Blue", false],
    [1, "One"],
    ["Summer", "Good"],
    [123, "prop"]
]);

for (let key of myMap.keys()) {
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
  }