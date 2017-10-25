//#1 принимает любое к-во чисел и возвращает их произведение
function miltiply() {
    console.log(typeof  arguments);
    let accum = 1;
    for(let i = 0; i < arguments.length; i++){
        accum *= arguments[i];
    }
    console.log(accum);

    return accum;
}
miltiply(1, 2, 3, 4, 5);

//#2 факториал числа 10
function factorial(digit) {
    let iter = function(counter, total) {
        if(counter === 1){
            console.log(total);
            return total;
        } else {
            return  iter(counter - 1, total * counter);
        }
    };
    return iter(digit, 1);


}

factorial(3);