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

console.log("womanCounter", womanCounter);
console.log("menCounter", menCounter);
console.log("users", users);




