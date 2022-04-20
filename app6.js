'use strict'

//задание 6**:
let money = String(prompt('Введите количество денег, которое хотите зачислить на счет в банке\n(цифрами без знаков препинания в конце)'));
let strMoney = money.length;
if ((money.charAt(strMoney - 2) == '1')) {
    alert('Ваша сумма в ' + money + ' рублей успешно зачислена');
} else {
    switch (money.charAt(strMoney - 1)) {
        case '1':
            alert('Ваша сумма в ' + money + ' рубль успешно зачислена');
            break;
        case '2':
        case '3':
        case '4':
            alert('Ваша сумма в ' + money + ' рубля успешно зачислена');
            break;
        default:
            alert('Ваша сумма в ' + money + ' рублей успешно зачислена');

    }
}