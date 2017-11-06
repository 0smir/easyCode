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

















