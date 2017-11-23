//1 создать объект котор. описывает прямоугольник, а так же
//может посчитать его площадь
function countSquare() {
    let square = this.width * this.height;
    this.square = square;
    console.log(square);
    return this;
}
let rectangle = {
    width: 300,
    height: 20,
    getSquare: countSquare
};
console.log(rectangle.getSquare());

//2 создать объект у которого будет цена товара и его скидка, а так же два метода:
//для получения цены и получение цены с учетом скидки

function getPrice() {
    console.log("цена", this.price);
    return this;
}

function getDiscountPrice() {
    let discount = parseFloat(this.discount);
    let priceWithDiscount = this.price * (100 - discount)/ 100;
    console.log("цена со скидкой", priceWithDiscount);
    return this;
}

let price = {
    price: 10,
    discount: '15%',
    getPrice: getPrice,
    getDiscountPrice: getDiscountPrice
};

console.log(price.getPrice());
console.log(price.getDiscountPrice());

//3 даны объект и ф-я, вывести имя.

function getName() {
    return this.name;
}
let user = {
    name: "Abraham",
    getName: getName
};
console.log(user.getName());

//4 Создать объект, с поляе: высота и метод - увнеличить высоту на 1;

function increase() {
    return this.height = this.height + 1;
}

let build = {
    height: 100,
    heightIncrease: increase
};

console.log("увнеличить высоту на 1: ", build.heightIncrease());
console.log("увнеличить высоту на 1: ", build.heightIncrease());
console.log("увнеличить высоту на 1: ", build.heightIncrease());
console.log("увнеличить высоту на 1: ", build.heightIncrease());


// 5 Сооздать обект "вычислить", у которого есть числовое свойство "значение" и методы:
// "удвоить", "прибавит  один", и "отнять один"ю Методы можно вызывать цепочкой

function double() {
    this.value = this.value * 2;
    return this;
}

function plusOne() {
    this.value = this.value + 1;
    return this;
}

function minusOne() {
    this.value = this.value - 1;
    return this;
}

let numerator = {
    value: 1,
    getDouble: double,
    getPlusOne: plusOne,
    getMinusOne: minusOne
};
numerator.getDouble().getPlusOne().getPlusOne().getMinusOne();
console.log("numerator.value", numerator.value);

// 6 объяснить что происходит
const user2 = {
        name: 'Abraham'
    },
    otherUser = {
        name: 'Anton',
        getName: function () {
            return this.name;
        }
    };

console.log(user2.getName);//undefined -т.к. нет данного метода у объекта user2
user2.getName = otherUser.getName;
console.log(user2.getName());// Abraham - произошло заимствование метода у другого  объекта. было
// создано поле с названием метода и передана ф-я которая возвращает имя

console.log(otherUser.getName());//Anton  контекст вызова user2 (т.к. вызываем имя через this)


//THIS
//1 Что выведет код, почему?

function getList() {return this.list;}

let users = {
    length: 4,
    list: ['Olya', 'Kolya', 'Nika', 'Mika']
};

console.log(getList());//undefined this = window у него нет свойства/метода list
users.getList = getList; // создаем метод в объекте users с названием getList и передаем ф-ю getList
console.log(users.getList()); // выведет массив, т.к. вызываеться в контексте объекта users (this = users)
console.log(getList.call(users));// выведет массив, т.к. при помощи call принудительно передается контекст вызова



//2 создать объект с розничной ценой и количеством продуктов. Он должен содержать
// метод для получения общей стоимости всех товаров.

let bill = {
    productPrice: 236,
    productNumber: 10,
    getTotalPrice: function () {
        return this.productPrice * this.productNumber;
    }
};

console.log("bill get totalPrice", bill.getTotalPrice());
//3 заимствование метода
let bill2 = {
    productPrice: 36,
    productNumber: 5
};

bill2.getTotalPrice = bill.getTotalPrice;
console.log("bill2 get totalPrice", bill2.getTotalPrice());

// 4 Даны объект и ф-я, неизменяя ф-ю или объект , получить результат функцтии
let size = {width: 5, height: 10},
    getSquare = function () {
        return this.width * this.height;
    };

console.log("получили результат функцтии getSquare в контексте объекта size:", getSquare.call(size));

//5 Дан Массив. Используя ссылку на массив найти минимальный эл-т массива
let numbers = [4, 12, 0, 10, -2, 4];
let min = Math.min.apply(null, numbers);
console.log("минимальный эл-т массива", min);

// 6

const element = {
        height: '5px',
        matginTop: '5px',
        marginBottom:  '5px',
        getFullHeight: function () {
            return parseFloat(this.height) + parseFloat(this.matginTop) + parseFloat(this.marginBottom);
        }
    },
    block = {
        height: '5px',
        matginTop: '3px',
        marginBottom:  '3px'
    };

console.log("element full height:", element.getFullHeight());
console.log("block full height:", element.getFullHeight.call(block));

//7
let element2 = {
    height: 25,
    getHeight: function () {return this.height;}
};
let getElemHeight = element2.getHeight;
console.log("element2 full height", getElemHeight.call(element2));

//Лексическое окружение
//1
getBigName(userName);

function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

var userName = 'Ivan';
// undefind -  по причине того что на момент вызова функции (function-declaration - готова к выполнению сразу же)
// переменная userName = undefind  на момент выполнения (находиться в том же лексическом окружении)


//2
function test() {
    var name = 'Vasiliy';
    return getUserBigName(usersNameIvan);
    
}

function getUserBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

var usersNameIvan = 'Ivan';
console.log("LE #2: ", test());//IVAN  в ф-и test вызываеться ф-я getUserBigName => не находит переменную usersName в
// лексическом окружении ф-и test  поэтому обращаеться к лексическому окружению на порядок выше (это глобальное ЛО),
//  где есть переменная usersName = 'Ivan'; (globalLE.userName = 'Ivan');



//3
var food = 'cucumber';

(function () {
    console.log("come to the modul");
    var food = 'milk';
    // var modulFood = getFood(food);
    // console.log("modulFood", getFood(food));
    // return modulFood;
}());

function getFood() {
    console.log("not modul", food);//'cucumber' -  лексическое окружение которое "запомнила" ф-я глобальное,
    // а в нем food = 'cucumber'
}

//Замыкания

//1 какое значение вернен ф-я getDollar7 Почему?
var dollar, getDollar;

(function () {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    };
}());

dollar = 30;

var someDollar = getDollar();

console.log("getDollar:", someDollar); // 0 , т.к. замыкание происходить на переменной dollar из модуля
// ф-я getDollar вызываеться в глобальной области видимости, выполняеться в модуле, при выполнении getDollar
// не находит в своих пределах переменную dollar поднимаеться выше по областям
// видимсти (в модуле находит переменную со значением 0) и возвращает её;

//2 что будет выведено в консоль
var gree = 'Hello';
(function () {
   var text = 'World';
   console.log("modul gree + text:", gree + text);// HelloWorld - при выводе console.log воспользовалось
    // переменной из глобальной области видимости, которая доступна для модуля
}());

// console.log("global gree + text:", gree + text);// - выведет отшибку т.к. для  console.log - в глобальной области видимости
// не доступна переменная text из области видимости модуля(подчиненная область)


//3 Создать ф-ю которая бы могла вывести:
let minus = (a) =>{
    var digArg = a || 0,
    minusFunc = function (b) {
        var b = b || 0,
            digMinus;
        if(digArg != 0){
            digMinus = digArg - b;
        }else{
            digMinus =  b;
        }
        return digMinus;
    };
  return minusFunc;
}

console.log("minus", minus(10)(6));
console.log("minus",minus(5)(6));
console.log("minus",minus(0)(5));
console.log("minus",minus(10)());
console.log("minus",minus()());

//4 Реализовать ф-ю, которая умножает и умеет запоминать, возвращаемый результат между вызовами:
function multiplayMaker() {
    let multyDig;

    return (a) => {
        if(!multyDig){
            multyDig = a * a;
        } else{
            multyDig = multyDig * a;
        }

        return multyDig;
    };
}

let multiplay = multiplayMaker(2);
console.log("multiplay 3: ", multiplay(3));
console.log("multiplay 1: ", multiplay(1));
console.log("multiplay 4: ", multiplay(4));
console.log("multiplay 5: ",multiplay(5));


// Модули
//Реализовать модуль которвй работвет со строкой и имеет методы:
// 1) установить строку; 2) получить строку;
// 3)получить длинну строки; 4) получить перевернутую строку;
let customString = "Wiii, my string!";
let customStringOneMore = "Wiii, my string! One more";
let bigNumber = 546546545;

let stringWork = (function () {
    let string;
    function stringInit(src) {
        if((typeof src) === numbers){
            src = src.toString();
        }
        if(src === ''){
            string = '';
        }
        string = new String(src);
        // return string;
    };

    function getString() {
        return string.toString();
    };
    function getStringLenght() {
        let strLenght = string.length;
        return strLenght;
    };
    function getStringRevert() {
        let revertStr = string.split('').reverse().join("");
        return revertStr;
    };
    return{
        init: stringInit,
        readStr: getString,
        lenghtStr: getStringLenght,
        revertStr: getStringRevert
    }

})();

stringWork.init(customString);
console.log("Module  readStr:  ", stringWork.readStr());
console.log("Module  lenght:  ", stringWork.lenghtStr());
console.log("Module  revert string:  ", stringWork.revertStr());


stringWork.init(customStringOneMore);
console.log("Module  readStr:  ", stringWork.readStr());
console.log("Module  lenght:  ", stringWork.lenghtStr());
console.log("Module  revert string:  ", stringWork.revertStr());

stringWork.init(bigNumber);
console.log("Module  readStr:  ", stringWork.readStr());
console.log("Module  lenght:  ", stringWork.lenghtStr());
console.log("Module  revert string:  ", stringWork.revertStr());

//6 Калькулятор

let calculator  = (function () {
    
    let result;

    function calcInit(number) {
        result = new Function(number);
        return result;
    }

    function addDigit(number) {
        result  = function (number) {
            
        };
        return result;
    }
    function minusDigit() {

    }
    function multipDigit() {

    }


    return {
        calculate: calcInit,
        add: addDigit,
        subtraction: minusDigit,
        addition: multipDigit
    }

})();

console.log("start number:", calculator.calculate(10));
console.log("add number: ", calculator.calculate(10).add(2));















