// Перебрать в цикле массив пользователей и посчитать сколько женщин а сколько мужчин.
// Определить фенщина или мужчина можно по полю gender.
// Кол-во мужчин и женщин записать в объект с полями male и female соответственно.
// Также каждому пользователю добавить поле verified со значением true;

let users = [
    {"gender":"Female","name":"Debra","job":"Photofeed"},
    {"gender":"Male","name":"Martin","job":"Linkbuzz"},
    {"gender":"Male","name":"Howard","job":"Fliptune"},
    {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
    {"gender":"Female","name":"Louise","job":"Vidoo"},
    {"gender":"Male","name":"Philip","job":"Feedfish"},
    {"gender":"Male","name":"Andrew","job":"Kare"},
    {"gender":"Male","name":"Anthony","job":"Jamia"},
    {"gender":"Male","name":"Jack","job":"Divanoodle"},
    {"gender":"Male","name":"Philip","job":"Fadeo"},
    {"gender":"Male","name":"Henry","job":"Tambee"},
    {"gender":"Male","name":"Robert","job":"Zooveo"},
    {"gender":"Male","name":"Alan","job":"Skynoodle"},
    {"gender":"Male","name":"Chris","job":"Browsetype"},
    {"gender":"Female","name":"Katherine","job":"Realblab"},
    {"gender":"Female","name":"Martha","job":"Jazzy"},
    {"gender":"Male","name":"Paul","job":"Feedmix"},
    {"gender":"Male","name":"Carlos","job":"Realbridge"},
    {"gender":"Male","name":"Ernest","job":"Tagfeed"},
    {"gender":"Male","name":"Adam","job":"Skidoo"},
    {"gender":"Female","name":"Denise","job":"Babbleopia"},
    {"gender":"Female","name":"Stephanie","job":"Jazzy"},
    {"gender":"Female","name":"Julia","job":"Topicstorm"},
    {"gender":"Female","name":"Donna","job":"Meeveo"},
    {"gender":"Male","name":"Lawrence","job":"Ozu"},
    {"gender":"Female","name":"Pamela","job":"Shuffletag"},
    {"gender":"Male","name":"Billy","job":"Tagopia"},
    {"gender":"Male","name":"Donald","job":"Feedspan"},
    {"gender":"Male","name":"Ryan","job":"Skyvu"},
    {"gender":"Male","name":"Scott","job":"Miboo"}
];


// Перебрать в цикле массив пользователей и посчитать сколько женщин а сколько мужчин.
let womanCounter = 0, menCounter = 0;

for(let i = 0; i<users.length; i++) {
    if(users[i].gender === 'Male'){
        menCounter++;
    } else {
        womanCounter++;
    }
    users[i]['verified'] = true;
    for(let j = 0; j < users.length; j++) {
        users[j].comonData = {
            male:  menCounter,
            female: womanCounter
        }
    }
}

// console.log("womanCounter", womanCounter);
// console.log("menCounter", menCounter);
console.log("users", users);
//
// console.log("Второе задание: ");

// Перебрать в цикле массив пользователей и посчитать сколько женщин а сколько мужчин. Определить фенщина или мужчина можно по полю gender.
// Кол-во мужчин и женщин записать в объект с полями male и female соответственно.
// Также каждому пользователю добавить поле verified со значением true;

// **** Повышенный уровень.
// Создать объект каждое поле которого называется также как значение в объекте users поля job, и посчитать сколько человек относится к какой из професий.

let peoples = [
    {"gender":"Female","name":"Debra","job":"Photofeed"},
    {"gender":"Male","name":"Martin","job":"Linkbuzz"},
    {"gender":"Male","name":"Howard","job":"Photofeed"},
    {"gender":"Male","name":"Jimmy","job":"Zoomdog"},
    {"gender":"Female","name":"Louise","job":"Vidoo"},
    {"gender":"Male","name":"Philip","job":"Feedfish"},
    {"gender":"Male","name":"Andrew","job":"Zoomdog"},
    {"gender":"Male","name":"Anthony","job":"Jamia"},
    {"gender":"Male","name":"Jack","job":"Divanoodle"},
    {"gender":"Male","name":"Philip","job":"Fadeo"},
    {"gender":"Male","name":"Henry","job":"Feedfish"},
    {"gender":"Male","name":"Robert","job":"Jazzy"},
    {"gender":"Male","name":"Alan","job":"Skynoodle"},
    {"gender":"Male","name":"Chris","job":"Browsetype"},
    {"gender":"Female","name":"Katherine","job":"Realblab"},
    {"gender":"Female","name":"Martha","job":"Jazzy"},
    {"gender":"Male","name":"Paul","job":"Jazzy"},
    {"gender":"Male","name":"Carlos","job":"Jazzy"},
    {"gender":"Male","name":"Ernest","job":"Tagfeed"},
    {"gender":"Male","name":"Adam","job":"Skidoo"},
    {"gender":"Female","name":"Denise","job":"Babbleopia"},
    {"gender":"Female","name":"Stephanie","job":"Skyvu"},
    {"gender":"Female","name":"Julia","job":"Topicstorm"},
    {"gender":"Female","name":"Donna","job":"Meeveo"},
    {"gender":"Male","name":"Lawrence","job":"Skyvu"},
    {"gender":"Female","name":"Pamela","job":"Meeveo"},
    {"gender":"Male","name":"Billy","job":"Skyvu"},
    {"gender":"Male","name":"Donald","job":"Feedspan"},
    {"gender":"Male","name":"Ryan","job":"Skyvu"},
    {"gender":"Male","name":"Scott","job":"Feedspan"}
];

let work = {};
let counterJob = 0;

for(let i = 0; i < peoples.length; i++ ){
    //создали обект со значениями
    work[peoples[i]['job']] = 0;
}
// console.log(work);
for(let i = 0; i < peoples.length; i++ ){

    for(key in work){
        if(peoples[i]['job'] ===  key){
            counterJob = work[key] + 1;
            work[key] = counterJob;
        } else {
            counterJob = 0;
        }
    }

    for(let k = 0; k < peoples.length; k++ ){
        peoples[i]['work'] =  work;
    }
}

// console.log(work);
console.log('peoples', peoples);




