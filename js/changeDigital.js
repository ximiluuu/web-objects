// 数字变化
function run(){
    var num3 = document.getElementById('num3');
let currentNumber3 = 0;
var interval3 = setInterval(() => {
    currentNumber3++;
    num3.innerText = currentNumber3;
    if (currentNumber3 === 404) {
        clearInterval(interval3);
    }
}, 0.01); 

var num2 = document.getElementById('num2');
let currentNumber2 = 0;
var interval2 = setInterval(() => {
    currentNumber2++;
    num2.innerText = currentNumber2;
    if (currentNumber2 === 863) {
        clearInterval(interval2);
    }
}, 0.0001); 

var num1 = document.getElementById('num1');
let currentNumber1 = 0;
var interval1 = setInterval(() => {
    currentNumber1++;
    num1.innerText = currentNumber1;
    if (currentNumber1 === 1) {
        clearInterval(interval1);
    }
}, 10); 
}