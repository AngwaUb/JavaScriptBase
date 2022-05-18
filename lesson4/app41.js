'use strict'

console.log("Задание №1:")

function convertNum(num) {
    if (Number.isInteger(num) && num >= 0 && num < 1000) {
        let units = num % 10;
        let tens = ((num - units) % 100) / 10;
        let hundres = (num - tens * 10 - units) / 100;
        let obj = {
            units: units,
            tens: tens,
            hundres: hundres
        };
        console.log(obj);
    } else {
        console.log(("Введенное выражение не соответствует заданным параметрам"));
    }
}
convertNum(-352);
convertNum(0);
convertNum(2);
convertNum(5.5);
convertNum(35);
convertNum("number");
convertNum(753.0);
convertNum(1256);
