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