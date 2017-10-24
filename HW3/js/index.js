//Первые буквы каждого слова в верхнем регистре
var string = 'I am in the easycode';
var newString = '';
var i = 0;

for( ; i < string.length; i++) {
    if(string[i] === ' '){
        newString = newString + string[i] + string[i + 1].toUpperCase();
        i += 1;
    } else {
        newString = newString + string[i];
    }
}
document.write(newString + '<br>');

//Перевернуть строку
let strRtl = 'tseb eht ma i';
let strLtr = '';
let iterCounter = strRtl.length;

while(iterCounter > 0) {
    strLtr += strRtl[iterCounter - 1];
    iterCounter--;
}
document.write(strLtr + '<br>');


//Факториал числа

let digit = 10;
let accum = 1;

while(digit > 0) {
    accum = accum * (digit);
    digit--;
}
document.write('factorial of 10: ', accum + '<br>');

//Создаем строку счет до 10
let count = 1;
let strCountTill10 = 'Считаем до 10: ';

do{
    strCountTill10 += count;
    if(count != 10){
        strCountTill10 += ', ';
    }
    count++;
} while(10 >= count);

document.write(strCountTill10 + '<br>');

//Строка без пробелов, каждое слово с большой буквы
let strJS = "JavaScript is pretty good language";
let strCamelCase = '';
let j = 0;

for(; j < strJS.length; j++) {
    if(strJS[j] === ' '){
        strCamelCase += strJS[j + 1].toUpperCase();
        j++;
    } else {
        strCamelCase += strJS[j];
    }
}
document.write(strCamelCase);


//Найти все нечетные числа от 1 до 15 и вывести в консоль
let number = 15;

while(number != false) {
    if((number % 2) > 0) {
        console.log('odd number: ', number);
    }
    number--;
}
