//Первые буквы каждого слова в верхнем регистре
var string = 'I am in the easycode';
var newString = '';
var i = 0;
for( ; i < string.length; i++){
    if(string[i] === ' '){
        newString = newString + string[i] + string[i + 1].toUpperCase();
        i += 1;
    }else{
        newString = newString + string[i];
    }
}
document.write(newString + '<br>');

//Перевернуть строку
let strRtl = 'tseb eht ma i';
let strLtr = '';
let iterCounter = strRtl.length;
console.log(iterCounter);
while(iterCounter > 0){
    strLtr += strRtl[iterCounter - 1];
    iterCounter--;
}
document.write(strLtr + '<br>');


//Факториал числа

let digit = 10;
let accum = 1;
while(digit > 0){
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
    console.log(strCountTill10);
} while(10 >= count);

document.write(strCountTill10);




