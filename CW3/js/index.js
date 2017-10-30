/**
 * Created by Olga on 10/20/17.
 */

// //do, do while, for , for in (ключи объекта + получает доступ к ключу), for of()
//
// //while(выражение)//  пока выражение = true цикл будет выполняться
//
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }
//
// let j = 10;
// while(j > 0){
//     console.log('j', j);
//     j--;
// }
// let isFinish , k = 10;
// while(!isFinish){// на первой итерации = true
//
//     console.log('k', k);
//     isFinish = !k--;
//     console.log('isFinish', isFinish);
// }
//
// // do while сперва выполняет потом проверяет
// let index;
// do{
//     console.log(index);
// }
// while(index);
//
// //for
// for( i = 0; i < 10; i++){
//     if(i === 5){
//         // break;
//         continue;
//     }
//     console.log(i);

// }

let str = "Hello world!";
let newStr = '';
for( let i = 0; i < str.length; i++){
    // console.log(str[i]);
    if(3 <= i <= 7){
        // newStr += str[i];
        // console.log(newStr);
        console.log(i);
    }
}
console.log(newStr);

//массив объектов
let users = [
    {
        name: "olya",
        age: 30,
        isOnline: true,
        balance: 200
    },
    {
        name: "yulya",
        age: 43,
        isOnline: false,
        balance: 20
    },
    {
        name: "Rita",
        age: 23,
        isOnline: true,
        balance: 120
    }
];
let totalUsersBalance = 0;
let usersMore = 0;
let usersLess = 0;

for(let i = 0; i < users.length; i++){
    users[i].name = users[i].name[0].toUpperCase() + users[i].name.slice(1);
    users[i].usersStatus = users[i].isOnline ? "online" : "offline";
    totalUsersBalance += users[i].balance;
    if(users[i].age > 24){
        usersMore++;

    } else{
        usersLess++;
    }

}

console.log(users);
console.log("totalUsersBalance", totalUsersBalance);
console.log(`Total users balance ${totalUsersBalance}`);
console.log(`usersLess 24 ${usersLess}`);
console.log(`usersMore 24 ${usersMore}`);

// таблица умножения
for(let i = 1; i <= 10; i++){
    document.write(`<b>${i}: </b>`);
    for(let j = 1; j <=10; j++){
        document.write(j * i + ", ");
    }
    document.write('<br>');
}

//for in для объектов
let client = {
    name: 'Den',
    age: 28
};
let keyCounter = 0;
for(let key in client){
    console.log(key);
    console.log(client[key]);
    keyCounter += 1;
}
console.log(keyCounter);

// for of for array
for(let value of users){
    console.log(value);
}

//перебирающие методы для массивов
//for each , filter, map, reduce, some