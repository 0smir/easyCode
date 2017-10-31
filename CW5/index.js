//function arrow

let arrow = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}

let result = arrow(2, 3);
console.log(result);

let arrow2 = x => x * 2;

let result2 =  arrow2(10);
console.log(result2);

//date

let date = new Date(2016, 4, 18);
console.log(date);//текущая дата//year, month, day, hour, minute, second, mls
console.log(+date); //вызов даты как числа

console.log("текущая дата", Date.now());

let time = new Date(1509441354659);//31.10.2017
console.log(time);
console.log("date", time.getDate())//return  date (number of day in month)
console.log("year", time.getDay());//return day of week
console.log("year", time.getFullYear());//return year
console.log("month", time.getMonth());//return month



let now = new Date();
console.log((now - (+date)));
//что б засечь дату надо её установить
let thisYear = now.getFullYear();
console.log("текущая дата", now);
console.log("текущий год", thisYear);
console.log("текущий год + 1", thisYear + 1);
// thisYear.setFullYear(thisYear + 1);
//передам опции, внимание!!!, с ними дата возвращает только то что есть в опциях
let options = {
    era: 'long',
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric'
};
let dateRu = now.toLocaleString('ru', options);

console.log("dateRu: ", dateRu);


let getCarYear = (info) => {
    console.log(info);
    let nowDate = new Date();
    console.log("now year", nowDate.getFullYear());
    if(typeof info.age !== 'number' && info.age <= 0){
        console.error('Age not foun!');
       return;
    }
    info.year =  nowDate.getFullYear() - info.age;
    console.log(info);
    return info;
}

getCarYear({nameCar: 'volvo', age: 4});

//every return true/false
//[2, 4, 6, 8]

let arr = [2,  4, 6, 7, 8, 9];
let everyResult = arr.every(function (element) {
    // console.log("element", element);
    // return !(element%2);
    return typeof element === "number";
});

console.log("everyResult", everyResult);

let everyArrow = (arr, callback) => {
    if(!arr.length){
        return console.error("array not found!");
    }
    let result = true;
    for(var i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
            result = false;
            break;
        }
    }
    return result;
}

let everyRes = everyArrow(arr, function (element) {
    return typeof element === "number";
});

console.log(everyRes);

// let res = every(arr,(element) => typeof  element === "number");
// console.log(res);

let messages = [
    {
        id: 'BJHg765',
        message: "Hehehe!",
        time: 1509449332499,
        user:{
            id: '',
            rank: 0,
            username: 'moto',
            verified: false
        }
    },
    {
        id: 'LKLyyt@s',
        message: "Ololo!",
        time: 1463518800000,
        user:{
            id: '',
            rank: 1,
            username: 'Tom',
            verified: false
        }
    },
    {
        id: 'LKLyyt@s',
        message: "ViHool!",
        time: 1509449333000,
        user:{
            id: '',
            rank: 2,
            username: 'Zem',
            verified: false
        }
    }
];

let generateMessage = (messages) => {
    // console.log(messages.length);
    if(!messages || !messages.length) return document.write ('<h3 class="empty-message-list">No messages!</h3>');
    let rankInfo = {
        '0':{
            type: 'user',
            color: '#cce5ff'
        },
        '1':{
            type: 'moderator',
            color: '#d4edda'
        },
        '2':{
            type: 'admin',
            color: '#fff3cd'
        }
    };

    for(let i = 0, max = messages.length; i < max; i++){
        // document.write(messages[i].user.username + ':' + messages[i].message + "<br>");
        let name = messages[i].user.username;
        let message = messages[i].message;
        let type = rankInfo[messages[i].user.rank].type;
        let color = rankInfo[messages[i].user.rank].color;

        console.log('user type', type);
        console.log('user color', color);

        let view = '<div class="alert" style="background: ' + color + '"> <b>' + type + '-' + name + '</b><p>' + message +'</p></div>';
        document.write(view);
    }

}

generateMessage(messages);