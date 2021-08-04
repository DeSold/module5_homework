// Задание 5.4 (4).
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function getRandomInt(max){
    return Math.floor(Math.random()*max);
    }
  console.log(getRandomInt(101));