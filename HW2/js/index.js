//Присвваевание
//1)Записать в коротком виде
let a = 5;
    a += 10;
let b = 3;
    b *= 18;
let c = 12;
    c -= 10;

let y = 8, x = 6, z = 4;
x += a;
y *= z;
console.log("y = ", y);
let i = 2;
i *= 5 * y;
console.log("i = ", i);
//2) Короткая запись: возведение в квадрат
let g = 6, j = 5;

g *= g;
j *= j;
console.log("возведение в квадрат", g, j);


//арифметические операторы
let arifmetA = 5;
console.log("постфиксный инкремент", arifmetA++);
console.log("префиксный инкремент", ++arifmetA);

// четное.не четное число
let digitFirs = 50,digitSecond = 49;
    function evenOdd(digit) {
        if((digit%2) != 0){
            console.log("не четное число", digit);
        } else{
            console.log("четное число", digit);
        }
    }
    evenOdd(digitFirs);
    evenOdd(digitSecond);

//Условные операторы
let visibility = "hidden";
    if(visibility == "hidden"){
        visibility = "visible";
        console.log("Условные операторы", visibility);
    } else {
        visibility = "hidden";
        console.log("Условные операторы", visibility);
    }

//тернарный оператор
visibility = (visibility == "hidden") ? "visible"  : "hidden" ;
console.log("тернарный оператор", visibility);

//Используя if записать условие

let variable = 2;

    variable = (variable == 0) ? 1 :
        (variable < 0) ? "less then zero" : variable * 10;
    console.log("тернарный", variable);

//Конструкция switch
let display = "olol";
switch(display){
    case "block": console.log("switch", "display: block");
        break;
    case "none": console.log("switch", "display: block");
        break;
    case "inline": console.log("switch", "display: block");
        break;
    default: console.log("switch", "display: flex");
}


//Преобразование типов
//1
let arg = 0 || "str";
    console.log(arg); //"str" (сработает как if( false || true ). В данном случае "str" привели к 1 == true)
    arg = 1 && 'string';
    console.log(arg); //'string' (т.к. оба значения приведены к true)
    arg = null || 25;
    console.log(arg);//25 (null - приведен к  0)
    arg = null && 25;
    console.log(arg);// null (null-->0-->false)
    arg = null || 0 || 35;
    console.log(arg);//35 (null-->0-->false, 35 --> true)
    arg = null && 0 && 35;
    console.log(arg);// null (null-->0-->false)

//2
let argDig = 12 + 14 + '12';
    console.log(argDig);//"2612" (первые две цифры сложились, их сумма преведена к строке и далее канкатонация со строкой '12')

    argDig = 3 + 2 - '1';
    console.log(argDig);// 4 ("1" --> 1 (т.к. вычитание возможно только для цифр, приведен к типу данных number))

    argDig = '3' + 2 - 1;// 32 (('3' + 2) сложило как строки --> "32" --> вычитание возможно только для цифр, приведен к типу данных number)
    console.log(argDig);

    argDig = true + 2;
    console.log(argDig);// 3 (true --> 1)

    argDig = '10' + 1;
    console.log(argDig);// "101" (1 --> к строке приведим, и далее канкатонация со строкой "10")

    argDig = +'10' + 1;
    console.log(argDig);//11 (+'10' - унарный плюс приводет к цифрам)

    argDig = undefined + 1;
    console.log(argDig);// NaN (undefined --> NaN, действия с  NaN приводят к NaN)

    argDig = null + 5;
    console.log(argDig);// 5 (null --> 0)

    argDig = true + undefined;
    console.log(argDig);// NaN (undefined --> NaN, действия с  NaN приводят к NaN)

// оператор запятая
variable = 5;

variable = (variable == 0) ? 1 :
    (variable < 0) ? ("less then zero", console.log("тернарный", variable)) : ((variable * 10), console.log("тернарный", variable));



