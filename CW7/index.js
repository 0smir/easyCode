// // function parseCoast() {
// //     console.log(this.price);
// //     return this;
// // }
// //
// // function getName() {
// //     console.log(this.name);
// //     return this;
// // }
// // //
// // // function getParcePrice.call(item) {
// // //
// // // }
// //
// // function setPrice(price) {
// //     this.price = price;
// //     return this;
// // }
// //
// //
// // let item = {
// //     name: 'Noa',
// //     price: 600
// //     // getPrice: parseCoast,
// //     // getName: getName
// // };
// //
// // let item2 = {
// //     name: 'Namy',
// //     price: 500
// //     // getPrice: parseCoast,
// //     // getName: getName
// // };
// //
// // console.log(item.price);
// // console.log(item.getPrice());
// // console.log(item.getPrice());
// // console.log(item2.getPrice());
// // console.log("getName item2", item2.getName());
//
// function foo() {
//     let arr = [].slice.call(arguments);
//     console.log(arr);
// }
// foo(10, 2, "elem");
//
//
// function nameToUppercase() {
//     return name.toUpperCase();
// }
//
// let item3 = {
//     name: 'Noa',
//     price: 600
// };
// item3.nameUp = nameToUppercase;
// // console.log(item3.nameToUppercase);
// console.log("item3", item3);
// let getUpName = item3.nameToUppercase;
//
// console.log(getUpName);

// function bind(func, context) {
//     return function(){
//         return func.call(context);
//     }
// }
//
// function getName() {
//     return this.name;
// }
//
// let user = {
//     name: "lkjkj"
// };
// let getUserName = bind(getName, user);
//
// console.log(getUserName());



//Замыкания

// лексическое окружение куда будут переданы все переменные
// {
//     value: 10,
//     text: 'hello',
//     getText: function ()
//     scope: null
// }
// let val = 10,
//     text = "hello";
//
// function getName(name) {
// // {
// //     startText: "my name is",
// //     name: 'Olya',
// //     args: arguments
// //     scope: //лексическое окруж №1
// // }
//
//     let startText = "my name is";
//
//     function getFullName(surnam) {
//         return  name + ' ' + surnam;
//     }
//     return startText + ' ' + getFullName('Ivanov');
// }
//
// getName('Olya');
// let ololo = getName('Olya');
// console.log(ololo);
//
// function makeCounter() {
//     //#1
//     let counter = 0;
//     // #2
//     return function () {
//         return ++counter;
//     }
//
// }
//
// let getCounter = makeCounter();
// let getCounter2 = makeCounter();
// // console.log(getCounter());
//
//
// let counter = {
//     val: 0,
//     plusOne: function () {
//         return ++this.val;
//     }
// };
//
// let count = (function () {
//     let index = 0;
//     function setValue(value) {
//         index = value;
//     }
//     function plusOne() {
//         index++;
//     }
//     function getIndex() {
//         return index;
//     }
//
//     return {
//         setValue: setValue,
//         plusOne: plusOne,
//         getIndex: getIndex
//     }
// })();

//Метод

function parseCoast() {
    this.price = parseFloat(this.price);
    return this;
}
function getName() {
    console.log("getName: ", this.name);
    return this;
}

let item ={
    name: 'Intel Core i7',
    type: 'Processor',
    price: '200$'
};

let item2 ={
    name: 'Intel Core i3',
    type: 'Processor',
    price: '100$'
};
// item.getPrice = parseCoast;
item.getName = getName;

// item2.getPrice = parseCoast;
item2.getName = getName;

// console.log("getPrice method", item.getPrice());
// console.log("getPrice method", item2.getPrice());
// console.log("getPrice name:", item2.getName());


// function foo() {
//     console.log("this: ", this);
// }
// foo();// окружение Window

parseCoast.call(item);

function setPrice(price, currency) {
    this.price = price + currency;
    return this;
}


setPrice.call(item, '500$', 'zzz');
console.log(item);

// call передает контекст + массив аргументов
setPrice.apply(item2, [300, '$']);
console.log(item2);


function fooo() {
    let arr  = [].slice.call(arguments);
    console.log(arr);

}
fooo(10, 20, 'ololo');

let max = Math.max.apply(null, [1, 55, 2, 66]);
console.log(max);


let item3 ={
    name: 'Intel Core i5',
    type: 'Processor',
    price: '800$'
};

item3.getName = getName;
let getCall = item3.getName.bind(item3);












let player = (function () {
    let audio;
    function init(source) {//'audio/audio.mp3'
        if(!source){
           return console.error("No source!");
        }
        audio = new Audio(source);
        console.dir(audio);
    }
    function play() {
        if(!audio){ return error("init audio with 'init'");}
        audio.play();
        console.log('audio play');
    }
    function pause() {
        audio.pause();
        console.log('audio paused');
    }

    function volume(value) {
        if(!audio){ return error("init audio with 'init'");}
        if(value){
            console.log("volume ", audio.volume);
        }
        return value ? audio.volume : audio.volume;
    }

    return {
        init: init,
        play: play,
        pause: pause,
        volume: volume
    }

})();