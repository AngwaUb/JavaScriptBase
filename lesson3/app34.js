'use strict'

const products4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

console.log("Задание №4:");
const resultIsImg = products4.filter(element => "photos" in element && element.photos.length > 0);
console.log(resultIsImg);
products4.sort(function (a, b) {
    return a.price - b.price
});
console.log(products4);