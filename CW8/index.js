"use strict";
// //класс
// function Person(firstName, lastName) {
//     //когда вызываем через оператор new:
//     //создаеться пустой объект
//     //этот объект устанавл. как this для этой функции
//     //ф-я запускаеться
//     //приватная переменная
//     this.firstName = firstName;
//     this.lastName = lastName;
//
//     //воврашает this
// }
//
// Person.prototype.fullName = function () {
//     return name + ' ' + this.lastName;
// };
//
//
// //user и user2 это экземпляры класса
// let user = new Person('Olya', 'Polya');
// console.log(user);
//
// let user2 = new Person('Ivan', 'Ivanov');
// console.log(user2);
// console.log(user2 instanceof Person);
// console.log(user2.fullName());

// ES6

class Person {
    //при помощи constructor (это обязательное свойство) - в этой
    // ф-и мы объявляем все публичные свойства
    constructor(firstName = Person.defaultName(), lastName = Person.defaultLastName()){
        this.firstName = firstName;
        this.lastName = lastName;
        Person.counter +=1;
        this._isLogin = true;
        this._skills = ['html', 'js', 'css'];

    }
    get isLogin(){
        return this._isLogin ? "You are log in" : "You are not log in";
    }
    set skills(val){
        this._skills.push(val);
    }
    set isLogin(value){
        if(typeof value === 'boolean'){
            this._isLogin = value;
        } else {
            console.error("Use true or false");
        }
    }
    get skills(){
        return this._skills.slice();
    }

    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    static defaultName(){
        return 'User';
    }
    static defaultLastName(){
        return 'defaultLastName';
    }
}

Person.counter = 0;

let user = new Person('Olya', 'Polya');
console.log(user);

let user2 = new Person('Ivan', 'Ivanov');
console.log(user2);


let user3 = new Person();
console.log(user3);

