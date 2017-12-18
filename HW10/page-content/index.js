document.addEventListener('DOMContentLoaded', function () {
    console.log('======== №1 Добавить элементы в список========');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
        li.className = 'new-item';
        li.textContent = "item5";

        ul.appendChild(li);

    let liTwo = document.createElement('li');
        liTwo.textContent = "item6";
        liTwo.className = 'new-item';
        ul.appendChild(liTwo);

    console.log('======== №2 Создать и добавить 4 эл-та strong в конец ссылок которые находяться в списке========');
    let linksInList = ul.querySelectorAll('a');
    console.log(linksInList);
    for(let i = 0; i < linksInList.length; i++){
        let elStrong = document.createElement('strong');
        linksInList[i].insertBefore(elStrong, null);
    }

    console.log('============Вставить картинку ============');
    let image = document.createElement('img');
        image.setAttribute('src', 'http://3.bp.blogspot.com/-IePzkhJavII/UZNFpg0HEBI/AAAAAAAAIZo/ACRJLb4FlWA/s1600/cat-prikol-1505.jpg');
        image.setAttribute('alt', 'cats');
    let body = document.getElementsByTagName('body')[0];

        body.insertBefore(image, body.firstChild);

    console.log('=========Элементу  mark добавить класс green и тект "green" =======');
    let markElement = document.querySelector('mark');
        console.log(markElement);
    markElement.classList.add('green');
    let markElementText = markElement.textContent;
    console.log(markElementText);
    markElement.textContent = markElementText + " green";

});