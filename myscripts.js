var checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6,
    checkbox7, checkbox8, checkbox9, checkbox10, checkbox11, checkbox12, 
    checkbox13, checkbox14, checkbox15, checkbox16;

function changeImage() {
    checkbox1 = document.getElementById("Checkbox1").checked;
    checkbox2 = document.getElementById("Checkbox2").checked;
    checkbox3 = document.getElementById("Checkbox3").checked;
    checkbox4 = document.getElementById("Checkbox4").checked;
    checkbox5 = document.getElementById("Checkbox5").checked;
    checkbox6 = document.getElementById("Checkbox6").checked;
    checkbox7 = document.getElementById("Checkbox7").checked;
    checkbox8 = document.getElementById("Checkbox8").checked;
    checkbox9 = document.getElementById("Checkbox9").checked;
    checkbox10 = document.getElementById("Checkbox10").checked;
    checkbox11 = document.getElementById("Checkbox11").checked;
    checkbox12 = document.getElementById("Checkbox12").checked;
    checkbox13 = document.getElementById("Checkbox13").checked;
    checkbox14 = document.getElementById("Checkbox14").checked;
    checkbox15 = document.getElementById("Checkbox15").checked;
    checkbox16 = document.getElementById("Checkbox16").checked;


}

function buttonclick() {


    if (checkbox1 == true) {
        t = 1;
        change();
    }

    if (checkbox2 == true) {
        t = 2;
        change();
    }
    if (checkbox3 == true) {
        t = 3;
        change();
    }

    if (checkbox4 == true) {
        t = 4;
        change();
    }
    if (checkbox5 == true) {
        t = 5;
        change();
    }

    if (checkbox6 == true) {
        t = 6;
        change();
    }
    if (checkbox7 == true) {
        t = 7;
        change();
    }

    if (checkbox8 == true) {
        t = 8;
        change();
    }
    if (checkbox9 == true) {
        t = 9;
        change();
    }
    if (checkbox10 == true) {
        t = 10;
        change();
    }

    if (checkbox11 == true) {
        t = 11;
        change();
    }
    if (checkbox12 == true) {
        t = 12;
        change();
    }
    if (checkbox13 == true) {
        t = 13;
        change();
    }
    if (checkbox14 == true) {
        t = 14;
        change();
    }
    if (checkbox15 == true) {
        t = 15;
        change();
    }
    if (checkbox16 == true) {
        t = 16;
        change();
    }
}


function change() {
    containerNo = t;
    let h = "sub-container" + containerNo;
    x = Math.floor(Math.random() * 40);
    let y = "url(img/img" + x + ".jpg)";
    document.getElementById(h).style.backgroundImage = y;
}




