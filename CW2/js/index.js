//тернарный оператор
//a > b & true : false

//арифметические операторы
let x = 5,
    y = 10;
    x = x + 10;
    x += 10;

    y = y * 2;
    y *= 2; //краткая запись
//

var z = 5,
    d = z%2;
console.log(d);

// || - запинаеться на правде
// && - запинаеться на лжи

let serverUserName = 'Olya';
let userLogin = false;
let userName = serverUserName || 'defaultUser';
console.log(userName);

let userStatus = userLogin && 'user online';
console.log(userStatus);

//if , if else
//?
//switch case

//if(выражения которые приводят к true или false){что то делать}
    if(userLogin){
        console.log('Wel come!');
    }else{
        console.error('You need to login!');
    }

    let age = 16;
    if(age >= 12){
        console.log("success");
    } else{
        console.error('Error');
    }

    let user = {
            name: 'Olyaka',
            age: 30,
            login: true
        };

    if(user.age >= 16 && user.login){
        // console.log('Hello' + user.name + '!');
        console.log(`Hello ${user.name}`);
    }else{
        console.error('Error');
    }
    let a = 3;
    (a > 1) ? console.log("a > 1") : console.log("a < 1");

    //switch
let value = 3+;
switch(value){
    case 1: console.log("1");
        break;
    case 2: console.log("2");
        break;
    default: console.log("not 2 and not 1");
}