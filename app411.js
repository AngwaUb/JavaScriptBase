'use strict'

console.log("Задание №1.1:")

//es5
function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function (discount) {
    this.price = this.price * 0.75;
}


//es6
class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}


let prod1 = new Product1('юбка', 1550);
prod1.make25PercentDiscount();
console.log("Стоимость товара '" + prod1.name + "' со скидкой 25% - " + prod1.price);
let prod2 = new Product2('шорты', 1000);
prod2.make25PercentDiscount();
console.log("Стоимость товара '" + prod2.name + "' со скидкой 25% - " + prod2.price);