//Домашнее задание 1

'use strict'

/*let tc = 25
let tf
tf = 9 / 5 * tc + 32
alert(tf)

let name = 'Василий'
let admin
name = admin
alert(admin)*/

//alert('Домашнее задание 3 \nУважаемый преподаватель! Ответы на теоретические вопросы в комментариях в коде :)')

// Домашнее задание 2

/*Задача 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксный инкремент увеличивает переменнаую на 1
d = b++; alert(d);           // 1 постфиксный инкремент сначала изменяет переменную, а потом возвращает ее обратно
c = (2+ ++a); alert(c);      // 5 прибавляем 2 к инкрементированой переменной, которая инкрементировалась префиксным инкрементом ранее
d = (2+ b++); alert(d);      // 4 прибавляем 2 к инкрементированой переменной, которая инкрементировалась постфиксным инкрементом ранее
alert(a);                    // 3 переменная дважды инкрементировалась префиксным инкрементом
alert(b);                    // 3 переменная дважды инкрементировалась постфиксным инкрементом, поэтому только сейчас вернулось измененное значение


//Задача 2

var a = 2;
var x = 1 + (a *= 2);

Ответ: 5*/

//Задача 3

/*let a = 6
let b = 4
if (a, b > 0) {
    console.log(a - b)
}
else if (a, b < 0) {
    console.log(a * b)
}
else {
    console.log(a + b)
}

//Задача 4


let x = 0

switch (x) {
    case 0:
        console.log(x++)
    case 1:
        console.log(x++)
    case 2:
        console.log(x++)
    case 3:
        console.log(x++)
    case 4:
        console.log(x++)
    case 5:
        console.log(x++)
    case 6:
        console.log(x++)
    case 7:
        console.log(x++)
    case 8:
        console.log(x++)
    case 9:
        console.log(x++)
    case 10:
        console.log(x++)
    case 11:
        console.log(x++)
    case 12:
        console.log(x++)
    case 13:
        console.log(x++)
    case 14:
        console.log(x++)
    case 15:
        console.log(x)
}


//Задача 5

function calcSum(firstNumber, secondNumber) {
    let sumResult = firstNumber + secondNumber
    console.log(`Результат сложения ${sumResult}`)
    return sumResult
}

function calcDiff(firstNumber, secondNumber) {
    let diffResult = firstNumber - secondNumber
    console.log(`Результат вычитания ${diffResult}`)
    return diffResult
}

function calcMultiply(firstNumber, secondNumber) {
    let multiplyResult = firstNumber * secondNumber
    console.log(`Результат умножения ${multiplyResult}`)
    return multiplyResult
}

function calcDivide(firstNumber, secondNumber) {
    let divideResult = firstNumber / secondNumber
    console.log(`Результат деления ${divideResult}`)
    return divideResult
}

//calcSum(81, 9)
//calcDiff(81, 9)
//calcMultiply(81, 9)
//calcDivide(81, 9)

//Задание 6

function mathOperation(arg1, arg2, operation) {
    arg1 = 4
    arg2 = 5
    operation = 'mult'
    switch (operation) {
        case 'sum':
            calcSum(arg1, arg2)
            break;
        case 'diff':
            calcDiff(arg1, arg2)
            break;
        case 'mult':
            calcMultiply(arg1, arg2)
            break;
        case 'div':
            calcDivide(arg1, arg2)
            break;
        default:
            console.log('Операция отсутствует')
            break;
    }
    return
}

mathOperation()

//Задание 7

if (null > 0) {
    console.log('null больше нуля')
} else if (null < 0) {
    console.log('null меньше нуля')
} else if (null == 0) {
    console.log('null и ноль равны')
} else if (null >= 0) {
    console.log('null больше или равно нулю')
} else if (null <= 0) {
    console.log('null меньше или равно нулю')
} else if (null != 0) {
    console.log('null однозначно не равно нулю')
} else {
    console.log('¯\_(ツ)_/¯')
}

//Задание 8

function risePower(val, pow) {

    if (pow == 1) {
        return val
    } else {
        return val * risePower(val, pow - 1)
    }

}

console.log(risePower(5, 6))*/

//Домашнее задание 3

//alert('Домашнее задание 3')

//Задача 1

let result = '2 3 5 7';
let i = 8;

while (i <= 100) {
    if (i % 2 && i % 3 && i % 5 && i % 7) {
        result += ' ' + i;
    }
    i++;
}

console.log(result);

//Задача 2

let cartPrice = 0;
let cart = [
    ['Толстовка', 4, 2000],
    ['Шорты', 3, 1000],
    ['Брюки', 3, 2500],
    ['Кроссовки', 2, 5000]
];

function countCartPrice() {
    for (i = 0; i < cart.length; i++) {
        cartPrice += cart[i][2] * cart[i][1]
    };

    return cartPrice;
}

countCartPrice();

//Задача 3

let a

for (a = 0; a < 9; console.log(++a)) {

}








