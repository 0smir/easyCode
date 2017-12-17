document.addEventListener('DOMContentLoaded', function () {

    console.log('====== 1) Найти параграф и получить его текстовое содержимое=======');
     let paragraph = document.querySelector('p');
    console.log("текстовое содержимое параграфа: ", paragraph.textContent);

    console.log('====== 2) создать ф-ю которая принимает как аргумент узел-DOM и возвращает информацию в виде объекта с данными ' +
        'о типе узла, об имени узла о количестве дочерних элементов======');
let link = document.querySelector('a');

    function getElementInfo(element) {
        function getElementNodeType() {
            let elNodeType = element.nodeType;
            if(elNodeType === 1){
                elnodeType = 'element node';
            } else if(elNodeType === 3){
                elnodeType = 'text node';
            } else if (elNodeType === 8){
                elnodeType = 'comment node';
            }
            return elnodeType;
        }
        function getElelmentNodeName() {
            let elNodeName = element.nodeName;
            return elNodeName;
        }
        function getElementChildCount() {
            let elChildCount = element.childElementCount;
                return elChildCount;
        }

        let elementInfo = {
            elementType: getElementNodeType(),
            elementNodeName: getElelmentNodeName(),
            elementChildCount: getElementChildCount()
        };

        console.log(elementInfo);

        return elementInfo;
    }

    getElementInfo(paragraph);
    getElementInfo(link);




    console.log('=== Получить массив, котор. состоит из текстового содержимого ссылок внутри списка ===');
    let listLinks = document.querySelectorAll('ul a'),
        listLinksTextArray  = [];

    for(let i = 0; i < listLinks.length; i++){
        listLinksTextArray.push(listLinks[i].textContent);
    }

    console.log(listLinksTextArray);


    console.log('=== В параграфе заменить все дочерние текстовые узлы на "-text-"===');
    let paragraphChildNodes = paragraph.childNodes;
    for(let i =0 ; i < paragraphChildNodes.length; i++){
        if(paragraphChildNodes[i].data){
            paragraphChildNodes[i].data = '-text-';
        }
    }
    console.log(paragraph);


    console.log('=================Часть 2===================')
    console.log('===== Найти в коде список ul и добпвить класс "list" ========');
    let list = document.querySelector('ul');
        list.classList.add('list');
    console.log(list);
    console.log('=======Найти в коде ссылку, находящуюся сразу после списока ul и установить класс "item"=========');
    let linkAfterList = document.querySelector('ul ~ a');
        linkAfterList.setAttribute('class', 'item');
    console.log(linkAfterList);
    console.log('=============На li через один установить класс "item"=============');
        let listItem = list.querySelectorAll('li');
        for(let i = 0; i < listItem.length; i++){
            if(i % 2 === 0){
                listItem[i].classList.add('item');
            }
        }
        console.log(listItem);
    console.log('=============На все ссылкти в примере установить класс "custom-link"=============');
    let linkList = document.querySelectorAll('a');

        for(let i = 0; i < linkList.length; i++){
            linkList[i].classList.add('custom-link');
        }

        console.log(linkList);

});