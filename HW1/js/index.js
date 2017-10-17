//variables
const MAX_NUM = 999;
const USER_NAME = "Vadim";
let price = 20;
let userData = {};

console.log(testStr);//undefind на момент вызова переменная не определена
var testStr = 'string';

var strX = 'string';
var strX = 'string #2';
console.log(strX);// 'string #2' - переменная переопределилась

//Strings

let string = 'some test string';
console.log("first letter", string[0]);//first letter "s"
console.log("last letter", string[string.length - 1]);// last letter "g"
console.log(string.indexOf("string"));//10
console.log(string.lastIndexOf(" "));//9
console.log(string.substr(5, 4));//"test"
console.log(string.substring(5, 10));//"test " взята строка с 5 по 9 символ включитекльно
console.log(string.slice(0, string.length - 6));//"some test "

var numA = 20, numB  = 16;
var strC = numA.toString() + numB.toString();
console.log(strC);//2016
console.log(typeof strC);// string

//Numbers

let piNumber = Math.PI;
console.log(piNumber.toFixed(2));//3.14

console.log("max Number", Math.max(15, 11, 16, 12, 51, 12,  13, 51));//51
console.log("min Number", Math.min(15, 11, 16, 12, 51, 13, 51));//11

let randomNumb = Math.random();
console.log(randomNumb.toFixed(2));
console.log(randomNumb.toFixed(2));

let randomDigit = Math.random();
let max = 100, min = 0;
console.log(Math.floor(randomDigit * (max - min) + min));

var digA = 0.6, digB = 0.7, digSum = digA + digB;
console.log(digSum.toFixed(1));
let digitString = '100$';
console.log(parseInt(digitString));



//Object
let phone = {product: "iPhone"};
console.log(phone);//{product: "iPhone"}
phone["price"] = 1000;
phone["currency"] = "dollar";
console.log(phone);//{product: "iPhone", price: 1000, currency: "dollar"}
phone['details'] = {};
phone.details["model"] = 's';
phone.details["color"] = 'gold';
console.log(phone);//{product: "iPhone", price: 1000, currency: "dollar", details: {…}}