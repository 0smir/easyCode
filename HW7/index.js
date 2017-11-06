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
    let priceWithDiscount = this.price - ((this.price * discount)/ 100);
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







