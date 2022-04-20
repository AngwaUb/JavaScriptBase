'use strict'

//задание 5:
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            console.log(sum(arg1, arg2));
            break;
        case '-':
            console.log(difference(arg1, arg2));
            break;
        case '/':
            console.log(division(arg1, arg2));
            break;
        case '*':
            console.log(multiplication(arg1, arg2));
            break;
        default:
            console.log('нет такого оператора');
    }
}
mathOperation(9, 6, '*');
mathOperation(9, 6, '/');
mathOperation(9, 6, '-');
mathOperation(9, 6, '+');
mathOperation(9, 6, '=');