//push, pop, shift, unshift

let array = [1, 2, 3];
array.push(25);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift("olol");
console.log(array);

//join array - > string
//split string  - > array

let arr1 = [2, 4, 8];

let string = arr1.join(', ');
console.log(string);

let arrFromStr = 'a, s, d'.split(',');
console.log(arrFromStr);

//slice
let arr2 = [1, 3, 5];
let arrSlice = arr2.slice(1, 3);
console.log('arrSlice', arrSlice);

//concat
let arr3 = ['one', 'two'];
let joinArr = arr2.concat(arr3);
console.log("concat", joinArr);
    joinArr = [].concat(arr3);
console.log("concat with empty arry", joinArr);

//splice
//change parent array

let chars = ['a', 's', 'd'];

chars.splice(1, 2, 'f', 'g');
console.log("dell and add chars: ", chars);

chars.splice(0, 0, 'f');
console.log("chars: ", chars);

chars.splice(0, 1, 'h');
console.log("chars: ", chars);

//reverse

chars.reverse();
console.log("reverse: ", chars);

let test = 'test'.split('').reverse().join('');
console.log("reverse string: ", test);

//sort
let arrForSort = ['q', 'w', 'e', 'r'];
arrForSort.sort();
console.log("sort", arrForSort);

let arrForSortNimberic = [77, 10, 1, 12, 123];


arrForSortNimberic.sort((prev, next) => {
    console.log('prev', prev, next);
    // console.log("next", next);
    if(prev < next){
        return -1;
    }
    if(prev > next){
        return 1
    }
});

console.log("sort", arrForSortNimberic);

let arrObj = [
    {
        name: 'Max',
        age: 28
    },
    {
        name: 'Den',
        age: 18
    },
    {
        name: 'Iks',
        age: 33
    }
];

arrObj.sort((prev, next) => prev.age - next.age);
console.log("sort object by age", arrObj);

let arr5 = [1, 2, 3, 5, 4];
arr5.forEach((item, i, arr) =>{
    console.log("forEach", i + ',' + item + ',' + arr);
});

//filter
let forFilter = [1, 2, -3, 5];
let filterArr = forFilter.filter((item, i) => {
    return item > 0;
});
console.log("positive numbers", filterArr);

let arr7 = [1, 7, 5, 9 ,7];
let uniqueFilrer = arr7.filter((item, i,  arr) =>{
    console.log("uniqueFilrer", item,  arr.indexOf(item), i);
    return arr.indexOf(item) === i;
});
console.log(uniqueFilrer);


// let array8 = [1, 2, 3, 5, 4, 6 ,5 ,7];
//
// let filterFunc = (arr, callback) => {
//     let result = [];
//     for(let k = 0; k < arr.length; i++){
//         console.log(arr[k]);
//         callback(arr[k], k, arr);
//         if(callback(arr[k], k, arr)){
//             result.push(arr[k]);
//         }
//
//     }
//     console.log("result", result);
//     return result;
//
// }
//
// let handler = (item, i , arr) => {
//     return arr.indexOf(item) = i;
//
// }
//
// filterFunc(array8, handler);

//map

let userNames = arrObj.map((item, i, arr) =>{
    return item.name;
});

console.log(userNames);

//reduce

let users = [
    {
        name: 'Denis Mescheryakov',
        age: 28,
        gender: 'male',
        balance: 100
    },
    {
        name: 'Olga Ivanova',
        age: 17,
        gender: 'female',
        balance: 100
    },
    {
        name: 'Dmitry Borisov',
        age: 28,
        gender: 'male',
        balance: 100
    },
    {
        name: 'Dmitry Borisov',
        age: 28,
        gender: 'male',
        balance: 100
    },
    {
        name: 'Alex Jons',
        age: 17,
        gender: 'male',
        balance: 100
    }
];

let total =  users.reduce((sum, currentVal, i) =>{
    console.log(sum, currentVal, i);
    return sum + currentVal.balance;

}, 0);
console.log(total);





