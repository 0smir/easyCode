function btnClick() {
    let text = (this === window) ? 'window' : this.className;
    console.log(text);
}

let btn1 = document.getElementsByClassName('button1')[0],
    btn2 = document.getElementsByClassName('button2')[0];


    btn1.onclick = btnClick;
    btn2.onclick = function () {
        console.log(this);
        btnClick();
    };

