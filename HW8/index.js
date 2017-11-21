'use strict';

// #1 Конструктор для производства авто. Принимает марку
//автомобиля и возраст


class Car{
    constructor(brand, age_of_car){
        this.brand = brand;
        this.age = age_of_car;
    }
    get carBrend(){
        return this.brand.slice(0, 1).toUpperCase() + this.brand.slice(1, this.brand.length);
    }
    get carProducedYear(){
        let currentDate = new Date();
        return currentDate.getFullYear() - this.age;
    }

}

let car1 = new Car('reno', 10);
console.log(car1);
console.log("Brand: ", car1.carBrend);
console.log("Produced Year: ", car1.carProducedYear);

// #2 Конструктор который элементрарно шифрует строки

console.log('=========== #2 Конструктор который элементрарно шифрует строки =======================');
// alert("Удаление строки, просьба производить при помощи команды в консоле браузера");

function Enigma (stringVal){

    let string = stringVal;

    this.originalString = function (){
        return string;
    };
    this.encodedString = function (){
        let encodedString = '';
        for(let i = 0; i < string.length; i++){
            encodedString += string[i].charCodeAt();
        }
        return encodedString;
    }

    this.deleteString = function (){
        let question  = () =>{
            let answer = confirm('Are you sure?');
            if(answer == true){
                string = '';
                console.log("строка была удалена!");
            } else {
               console.log("строка не была удаленаюВы отменили действие");
            }
            return this;
        }

        return question();
    }

}

let helloStr1 = new Enigma('Hello, world');
let helloStr2 = new Enigma('Hello, Girls');
let helloStr3 = new Enigma('Hello, world 3');



console.log(helloStr1);
console.log("oiginal string: ", helloStr1.originalString());
console.log("encoded String: ", helloStr1.encodedString());
// console.log('string was deleted', helloStr1.deleteString);


console.log(helloStr2);
console.log("oiginal string: ", helloStr2.originalString());
console.log("encoded String: ", helloStr2.encodedString());


console.log("oiginal string: ", helloStr3.originalString());
console.log("encoded String: ", helloStr3.encodedString());

// #3 Создать класс экземпляры которого работают со строкой

console.log('=========== #3 Создать класс экземпляры которого работают со строкой ===================');

class strClass{
    constructor(stringVal){
        this.string = stringVal;
    }

    get getString(){
        return this.string;
    }
    get getStringLength(){
        return this.string.length;
    }
    set setString(value){
        return this.string = value;
    }

}

strClass.prototype.toString = function (){
    return this.string;
}
// strClass.prototype.Number = function (str) {
//     return this.string.length;
// }

let string1 = new strClass ('firstString');

console.log("getString", string1.getString);
console.log("toString()", string1.toString());
console.log("getStringLength", string1.toString());
// console.log("parseInt", Number(string1));