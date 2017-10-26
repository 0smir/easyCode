//#1 принимает любое к-во чисел и возвращает их произведение
function miltiply() {
    let accum = 1;
    for(let i = 0; i < arguments.length; i++){
        accum *= arguments[i];
    }
    console.log("miltiply function result: ", accum);

    return accum;
}
miltiply(1, 2, 3, 4, 5);

//#2 факториал числа 10
function factorial(digit) {
    let iter = function(counter, total) {
        if(counter === 1){
            console.log("factorial of 10: ", total);
            return total;
        } else {

            return  iter(counter - 1, total * counter);
        }
    };

    return iter(digit, 1);
}

factorial(10);

//#3 принимает строку возвращает строку-перевертыш

function revertString(string) {
    let revertStr = '';
    for(let i = 1, max =  string.length; i <= max; i++){
        revertStr += string[string.length - i];
    }
    console.log("revert string: ", revertStr);
    return revertStr;
}

revertString('test');

//#4 Сщздать функцию, которая  вкачестве аргумента принимаетстроку
//из букв и возвращает строку, где каждый символ разделен пробелом
//и заменен на юни-код значение символа:

function getCodeStringFromText(string) {
    let codeString = '';

    for(let i = 0; i < string.length; i++){
        codeString  +=  (i !== string.length - 1) ? string.charCodeAt(i) + ' ' : string.charCodeAt(i);
    }

    return codeString;
}

console.log(getCodeStringFromText('hello'));

//#5 ф-я - рекурсмия которая выводит каждый символ строки в консоль

function getSymbolInLine(str) {
    let index = 0;
    let iter = function (str) {
        console.log(str[index]);
        while(index !== (str.length - 1)){
            index++;
            iter(str);
        }
    };

    iter(str);
}

getSymbolInLine('test');



