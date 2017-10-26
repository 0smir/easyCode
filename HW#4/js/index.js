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
    // console.log("revert string: ", revertStr);
    return revertStr;
}

console.log("revert string: ", revertString('test'));

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

console.log("char of symbols: ", getCodeStringFromText('hello'));

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

//#6
function dataHandler(array) {
    if(typeof(array[1]) === 'string'){
        console.log('typeof array data:', 'string');

        var concatArrayItems = '';
        for(let i = 0; i < array.length; i++){
            let wordUpperCased = array[i][0].toUpperCase() + array[i].slice(1) ;
            concatArrayItems += wordUpperCased;
        }

        return concatArrayItems;

    } else if(typeof(array[1]) === 'object'){
        console.log('typeof array data: ', 'object');
        let totalInfo = '';

        for(let i = 0; i < array.length; i++){
            totalInfo += (i !== array.length - 1) ?  `${array[i].name} is ${array[i].age}` + ', ' : `${array[i].name} is ${array[i].age}`;
        }

        return totalInfo;


    }  else if(typeof(array[1]) === 'number'){
        console.log('typeof array data: ', 'number');
        for(let i = 0; i < array.length; i++){
            array[i] *= 10;
        }

        return array;
    }

}

function getResult(data, handler) {
    var intro = 'New value';
    var someMake = handler(data);
    console.log('New value: ' + someMake);
   return 'New value' + someMake;
}




getResult(['my', 'name', 'is', 'Trinity'], dataHandler);
getResult([10, 20, 30], dataHandler);
getResult([{age: 45, name: 'John'}, {age: 25, name: 'Aaron'}], dataHandler);




