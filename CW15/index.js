let foo = a => a * 2;
let foo2 = (a, b) =>{
    let c =a * b;
    console.log(c);
    return c;
}

let button = document.querySelector('.btn');

button.addEventListener('click', function(e){
    console.log(this); //вернет кнопку
});

button.addEventListener('click', (e) =>{
   console.log(this); //вернет Window
});

let arr = [5, 9, 3, 6, 2];

arr.sort(function (prev, next) {
    return prev - next;
});
console.log(arr);

function rest(...denis) {
    console.log(denis, arguments);
}

rest(1, 2, 'klo');

let users = [];
let newUsweArr = [];
for(let i = 0; i < users.length; i++){
    newUsweArr.push(users[i]);
}

let newUserArr2 = users.filter((user, i, arr) => user.age > 18);
//формирует новый массив из элементов которые соответствуют условию фильтра


let mapExample = users.map(value => user.age);

let xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.addEventListener('load', function () {
    console.log(xhr.response);
    console.log(JSON.parse(xhr.response));
});
console.log(xhr);