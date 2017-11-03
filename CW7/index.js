// // function foo() {
// //     console.log("this: ", this);
// // }
// // foo();// окружение Window
// //
// // function getCoast() {
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
// //     // getPrice: getCoast,
// //     // getName: getName
// // };
// //
// // let item2 = {
// //     name: 'Namy',
// //     price: 500
// //     // getPrice: getCoast,
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


// let counter = {
//     val: 0,
//     plusOne: function () {
//         return ++this.val;
//     }
// };

let count = (function () {
    let index = 0;
    function setValue(value) {
        index = value;
    }
    function plusOne() {
        index++;
    }
    function getIndex() {
        return index;
    }

    return {
        setValue: setValue,
        plusOne: plusOne,
        getIndex: getIndex
    }
})();