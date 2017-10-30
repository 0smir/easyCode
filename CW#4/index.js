/**
 * Created by Olga on 10/24/17.
 */

//рендомная строка из строки
//
// let str = "kjkgmhmads kuhjhdasl jhas jjj";
// for(let i = 0; ){}



//functions

//function declaration
//function expression
//function ananimus
//function - arrows



//function declaration
// console.log(num());
//
// function num() {
//     let a = 2;
//     return a + 5;
// }
// // console.log();
// let res = num() * 2;
// console.log(res);
//
//
// //function expression
// // console.log(foo()); undefined
// var  foo = function () {
//     let f = 6;
//     return f + 3;
// };
//
// console.log(foo());
//
// //sif - self invoked function
//
// (function () {
//     console.log("script loaded");
// })();
//
// let r = 3;
//
// function numFunk() {
//     r = 10;
//     console.log("local var ", r);
// }
//
// console.log('global var', r);
// numFunk();

//
function consoleArg(...args) {
    console.log(args);

    for(let i = 0; i < args.length; i++){
        console.log(typeof args[i]);
    }

}

consoleArg([5, 6, 7], 4, 'jhhb', {name: "ololo"});

// функции высшего порядка - принимают в качестве аргумента или возвращают
// другие функции
 function hiFunc() {
     return function (x, y) {
         return x + y;
     }
 }

console.log(hiFunc());
let parentFunk = hiFunc();
console.log(parentFunk);
console.log(parentFunk(3, 8));


function getNumber(number, hendler) {
    let newNumber;
    console.log(hendler);
    
    newNumber = hendler(number);
    return newNumber;
}

function worker(num) {
    return 'the number is ' + num;
}

getNumber(6, worker);

function processStr(str, separator, handler) {
    let newSepString = '';
    for(let i = 0; i < str.length; i++){
        newSepString +=  handler(str[i], separator);
        // if(str[i] = str.length - 1){
        //     newSepString += str[i];
        // }
    }
    console.log(newSepString);
    return newSepString;
}

function workerString(simbol, separator) {
    return simbol + separator;
}
let stringResult = processStr("ololo", '|', workerString);

function http(method, callback) { //созд. ф-ю, котор принимает метод - имя метода - строку, и обработчик - ф-юж
    console.log('sending of  ' + method + 'request...'); //иммитация работы
    setTimeout(function () {//вызов setTimeout в которой вызываем callback - кторому передали объект с данными
        callback({
            method: method,
            status: 'success'
        });
    }, 2000);
}

http('POST', function (responce) {// в аргументе responce - содержиться  преданный объект от http(ф-я);
    console.log(responce);
});

setTimeout(function () {
    console.log("setTimeOut");

}, 1000);

//рекурсия
function recursy(limit) {
    let value;
    if(limit > 0){
        value = limit + recursy(limit - 1);
    } else {
        value = limit;
    }

    return value;
}

let resultRec = recursy(5);
console.log(resultRec);

