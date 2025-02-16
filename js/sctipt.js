// 1

const text1 = prompt("Заповніть поле")
const text2 = prompt("Заповніть поле")
let result;
if (text1 && text2) {
    result = "Обидва поля заповнені";
} else {
    result = "Не всі поля заповнені";
}
console.log(result);

// 2

const num1 = Number(prompt("Заповніть поле числом"))
const num2 = Number(prompt("Заповніть поле числом"))
const sum = num1 + num2;
console.log(sum);
let result1;

if (sum > 10) {
    result1 = "Сумма більше 10";
} else {
    result1 = "Сумма менше, або дорівнює 10";
}
console.log(result1);

// 3

const text3 = prompt("Введіть текст");
const resutl2 = (text3.includes("JavaScript"));
if (resutl2) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4

// 4

let text4 = Number(prompt("Заповніть поле числом"))
let result3;

if (10 < text4 < 20) {
    result3 = "Число входить в діапазон від 10 до 20";
} else {
    result3 = "Число не входить в діапазон від 10 до 20";
}
console.log(result3);


