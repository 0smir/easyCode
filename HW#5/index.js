//1 ф-я принимает год возвращает день недели 1 января соответствующего года

function getWeekDay(year) {
    let date = new Date(year, 0, 1);
    let options = {
        weekday: 'long'
    };
    let weekDay = date.toLocaleString('ru', options);
    return weekDay;
}

let wday = getWeekDay(2017);
console.log("день недели 1 января соответствующего года: ", wday);

//2 ф-я принимает дату в виде строки, а возвращает день недели в рус. формате

function getWeekDayRu(str) {
    let day = str.slice(0, 2),
        month = str.slice(3, 5),
        year = str.slice(6);
    options = {
        weekday: 'long'
    };
    let time = new Date(+year, +month, +day);
    return  time.toLocaleString('ru', options);
}

getWeekDayRu("29.03.1985");
console.log("приняли дата в виде строки, возвращает день недели: ", getWeekDayRu("29.03.1985"));

//3 рассчет кол-ва полных недель с начала года

function countWeek(y, m, d) {
    let toDay = new Date();
    let startDate = new Date(y, m, d);
    let week = (+toDay - (+startDate))/(7 * 24 * 60 * 60 * 1000);

    return week.toFixed(0);

}

console.log("кол-ва полных недель с начала года: ", countWeek(2017, 0, 1));

