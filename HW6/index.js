//1 ф-я которая принимает массив - возвращает новый массив с дублированными
// эл-тами входного массива
let forDobleStart = [6, 2, 3, 4];
let double = (arr) =>{
    let doubleArr = ([].concat(arr)).concat(arr);
    return doubleArr;
}

double(forDobleStart);
let doubleAnswer = double(forDobleStart);
console.log("double array", doubleAnswer);






//2 получить последний элемент массива

let getLastElement = (arr) => arr[arr.length - 1];
let getLastElementAnswer = getLastElement(forDobleStart);
console.log("Last Element:", getLastElementAnswer);






//3 создать ф-ю, котор. принимает число Х и возвращает массив от  1 до до Х

let range = (numb) =>{
    let rangeArr = [];
    let counter = 0;
   while(counter <= numb){
       rangeArr.push(counter);
       counter++;
   }
    return rangeArr;
}

let rangeAnswer = range(10);
console.log("range 10", rangeAnswer);





//4 ф-я принимает произвольное число массивов и удаляет мз каждого первый эл-т
// и возвращает массив из оставшихся эл-тов

let arrDigit = [1, 2, 3], arrStr = ['a', 'b', 'c'], arrMixed = [{name: "Prolo", age: 5}, 'string', 23, 28];

let delFirstArrElement = function(...arguments){
    let funcArg = arguments,
        newArrayList = [];
    for(let i = 0; i < funcArg.length; i++){
        let elem = funcArg[i].splice(1, funcArg[i].length - 1);
        console.log(elem);
        newArrayList.push(elem);
    }
    return newArrayList;
}

let delFirstArrElementAnswer = delFirstArrElement(arrDigit, arrStr, arrMixed);
console.log("del First ArrElement:", delgitFirstArrElementAnswer);