'use strict'

//es5
function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostEs5.prototype.edit = function (incomingText) {
    this.text = incomingText;
}

function AttachedPostEs5(author, text, date, highlighted) {
    PostEs5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;

AttachedPostEs5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

//es6
class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(incomingText) {
        this.text = incomingText;
    }
}

class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

console.log("Задание №1.2:");
let test1 = new AttachedPostEs5("Pratchett", "", "1983");
test1.edit("Цвет волшебства");
test1.makeTextHighlighted();
console.log(test1);
let test2 = new AttachedPostEs6("Пушкин", "Евгений", "1833");
test2.edit("Евгений Онегин");
test2.makeTextHighlighted();
console.log(test2);