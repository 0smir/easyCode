document.addEventListener('DOMContentLoaded', function () {

    console.log('====== 1) Найти параграф и получить его текстовое содержимое=======');
     let paragraph = document.querySelector('p');
    console.log("текстовое содержимое параграфа: ", paragraph.textContent);

    console.log('====== 2) создать ф-ю которая принимает как аргумент узел-DOM и возвращает информацию в виде объекта с данными ' +
        'о типе узла, об имени узла о количестве дочерних элементов======');


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


});