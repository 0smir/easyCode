//1 получить head

let head = document.getElementsByTagName('head');
console.log(head);

//2 получить body
let body = document.querySelector('body');
console.log(body);


//3 получить все дочерние элементы body
console.log("==========все дочерние элементы body (без текста)===========");
let bodyChildNodes = body.childNodes;
// console.log(bodyChildNodes);
let bodyChils = body.children;
console.log("короткий способ: ");
for(let i = 0; i < bodyChils.length; i++ ){
    console.log(bodyChils[i]);
}
console.log("способ подлиннее, но результат тот же: ");
for(let i = 0; i < bodyChildNodes.length; i++ ){
    if(bodyChildNodes[i].nodeName !== "#text"){
        console.log(bodyChildNodes[i]);
    }
}
//4 первый div и все его дочерние узлы
console.log("========= первый div ============");
let firstDiv  = body.firstElementChild;
console.log(firstDiv);

//4.1 получить все дочерние узлы
console.log("========= все дочерние узлы первого div ============");
let firstDivCildrens = firstDiv.children;
for(let i = 0; i < firstDivCildrens.length; i++ ){
    console.log(firstDivCildrens[i]);
}
//4.2 вывести все дочерние узлы кроме первого и пследнего
console.log("========= все дочерние узлы первого div кроме первого и пследнего============");
for(let i = 0; i < firstDivCildrens.length; i++ ){
    if((firstDivCildrens[i] !== firstDiv.firstElementChild) && (firstDivCildrens[i] !== firstDiv.lastElementChild)){
        console.log(firstDivCildrens[i]);
    }
}


//DOM
console.log("============= DOM Part 2 ==================");
console.log("=== 1. Ф-я для проверки является ли первый элемент родителем второго ======");
let linkList = document.links;
let listUl = document.getElementsByTagName('ul')[0];
let listItems = document.querySelectorAll('li');
function isParent(parent, child) {

    let parentNode = child.parentNode;
    let matches = true;
    while(parentNode !== parent){

        if(parentNode === parent) {
            matches = true;
            return;
        }
        if(parentNode === null){
            matches = false;
            return matches;
        }
        parentNode = parentNode.parentNode;
    }

    return matches;
}

console.log(isParent(listUl, linkList[3]));
console.log(isParent(listUl, linkList[0]));

console.log("=== 2. список ссылок которые не находятся внутри ul ======");
let linkNotInList = [];
for(let i = 0; i < linkList.length; i++){
    if(!linkList[i].closest('ul')){
        linkNotInList.push(linkList[i]);
        console.log(linkList[i]);
    }
}
console.log(linkNotInList);

console.log("====== 3. элементы котор. находятся перед и после ul  ======");

console.log("prev", listUl.previousElementSibling);
console.log("next", listUl.nextElementSibling);

console.log("====== 4. посчитать кол-во элементов li в списке =======");

console.log('li count:', listItems.length);