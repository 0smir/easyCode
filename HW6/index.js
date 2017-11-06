//1 ф-я которая принимает массив - возвращает новый массив с дублированными
// эл-тами входного массива
let forDobleStart = [6, 2, 3, 4];
let double = (arr) => arr.concat(arr);

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
        newArrayList.push(elem);
    }
    return newArrayList;
}

let delFirstArrElementAnswer = delFirstArrElement(arrDigit, arrStr, arrMixed);
console.log("del First ArrElement:", delFirstArrElementAnswer);


//Массивы 2ч.
// 1 В произвольной строке упорядочить буквы по алфавиту и вернуть строку в обратном порядке

let getAlphabetStr = (str) => str.split("").sort().reverse().join("");

let getAlphabetStrResult = getAlphabetStr('bcarwz');

console.log("getAlphabetStrResult", getAlphabetStrResult);

//2 Отсортировать массив в обратном порядке (от большего к меньшему)
let arrayForSort = [2, 4, 7, 1, -2, 10, -9];

let sortArray = (arr) => {
    arr.sort(function (a, b) {
        if(a < b) return 1;
        if(a < b)return -1;
        
    });
    return arr;
}

let sortArrayResult = sortArray(arrayForSort);
console.log("массив в обратном порядке", sortArrayResult);

//3 Ф-я принимает три аргумента произвольный массив и два чисда. Возвращает новый массив

let catArry = (arr, from, till) =>{
    let snippetArr = arr.slice(from, till + 1);

    return snippetArr;
}

console.log("Выделен новый массив, согласно условий функии", catArry([1, 2, 3, 4, 5, 6], 2, 4));

//4 Удвоить все элементы массива не используя циклы.
let array = ['ggg', 5, 9, 0];
function getTwiceArray(arr) {
    let twicedArr = [].concat(arr, arr);

    return twicedArr;
}

console.log(getTwiceArray(array));

//5 Удалить из массива 2 и 3 эл-ты
let digitList = [2, 5, 6, 7, 10, 55];

digitList.splice(2, 2);
console.log(digitList);
//6 заменить значения массива
digitList.splice(1, 2, "tree", "four");
console.log(digitList);

//7 вставить значене в массив
let stringArr = ["Javascript", "is", "awesome"];
stringArr.splice(2, 0, "realy");
console.log(stringArr);


//8 сортировка массивов по длинне
//
// let arrayA = [1, 2, 3], arrayB = [1, 2, 3, 4], arraeC = ["o", "j", "f", 6, 5];

let bigArray = [[1, 2, 3], [1, 2, 3, 4], ["o", "j", "f", 6, 5], [1, 2], ["o", "j", "f", 6, 5, 1, 2]];
let sortArrayByLength = (arr) =>{
    arr.sort(function (prev, next){
        if(prev.length < next.length) return -1;
        if(prev.length > next.length) return 1;
    });
    return arr;
}

let sortedArray = sortArrayByLength(bigArray);
console.log("сортировка массивов по длинне", sortedArray);

//9 создвть копию произвольного массива
let getCopyOfArray = (arr) =>{
    let arrCopy = [].concat(arr);
    return arrCopy;
}

let copyOfArryResult = getCopyOfArray(bigArray);
console.log("arr Copy with concat", copyOfArryResult);

let getArrayCopyWithSlice = (arr) =>{
    let arrayCopySplice = arr.slice();
    return arrayCopySplice;
}

console.log("getArrayCopyWithSlice", getArrayCopyWithSlice(stringArr));

//10 отсортировать массив объектов по возрастающему кол-ву ядер

let parametrArr = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            cache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 4
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 1,
            cache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            cache: 2
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 2
        }
    }
];

let sortByCoreCount = (arr) =>{
    arr.sort(function (prev, next) {
        if(prev.info.cores < next.info.cores) return -1;
        if(prev.info.cores > next.info.cores) return 1;
    });
    return arr;
}

console.log("массив объектов c возрастающему кол-вом ядер", sortByCoreCount(parametrArr));

//11 Создать ф-ю, которая будет принимать массив продуктов и две цены. Ф-я должна вернуть все прод-ты, цена которых
// находиться в указанном диапазоне, и отсортировать от дешевых к дорогим.

let products = [
    {title: "prod1", price: 5.2},
    {title: "prod2", price: 0.18},
    {title: "prod3", price: 15},
    {title: "prod4", price: 25},
    {title: "prod5", price: 18.9},
    {title: "prod6", price: 8},
    {title: "prod7", price: 19},
    {title: "prod8", price: 63}
];

let priceFilter = (arr, from, till) =>{
    let prodactRange = [];
    arr.sort(function (prev, next) {
        if(prev.price < next.price) return -1;
        if(prev.price > next.price) return 1;
    });
    for(let i = 0; i < arr.length; i++){
        if((from <= arr[i].price) && (arr[i].price <= till)){
            prodactRange.splice( prodactRange.length, 0, arr[i]);
        }
    }
    return prodactRange;
}

let priceFilterResult = priceFilter(products, 0, 10);
console.log("prodactRange", priceFilterResult);
