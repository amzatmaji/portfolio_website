let header = document.getElementById('top');
function firstFunc() {
    header.style.backgroundColor = 'darkred';
}
header.onclick = firstFunc;

let tel = document.getElementsByClassName('tel')[0];
let email = document.getElementsByClassName('email')[0];
function secondFunc() {
    tel.style.backgroundColor = 'orange';
    tel.style.border = 'none'
}
function thirdFunc() {
    email.style.backgroundColor = 'orangered';
    email.style.border = 'none';
}
tel.onmouseover = secondFunc;
email.onmouseover = thirdFunc;

