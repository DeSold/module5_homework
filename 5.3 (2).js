// Задание 5.3 (2).
// Дана переменная Х, которая может принимать любое значение. 
// Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. 
// В других случаях выводите сообщение: «Тип x не определён».

let x = prompt("Enter any value");
if(x === "true" || x === "false"){
    console.log(x+ "- Bulean");
}else if(typeof +x === "number" && !isNaN(x)){
    console.log(x+ "- number");
}else if (typeof x === "string"){
    console.log(x + "- string");
}else console.log("Тип x не определен");