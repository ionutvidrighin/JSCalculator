
let history = document.querySelector(".historyOperator");
let display = document.querySelector(".currentOperator");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let decimal = document.getElementById("decimal");
let clear = document.querySelector("#clear");
let deleteBtn = document.querySelector("#backspace");

let displayVal = "0";
let count = 100000000000000000;
let upperNums;
let numbersToCalculate = [];

let allOperators = document.querySelector(".backgroundChange1");
let allNums = document.querySelector(".backgroundChange2");
let body = document.querySelector("body");
let calculatorBody = document.querySelector(".calculator");
let theme1 = document.querySelector("#theme1");
let theme2 = document.querySelector("#theme2");
let theme3 = document.querySelector("#theme3");


theme1.onclick = () => {
    gsap.fromTo("body", {backgroundImage:'#bdc3c7' }, {backgroundImage: 'linear-gradient(to right top, #69fff5, #5cf3ff, #6de4ff, #8ad4ff', duration: 6});
    gsap.to('.calculator', {backgroundColor: '#537372', duration: 7});
    gsap.to('.backgroundChange1', {backgroundColor: '#7EFFE9', duration: 10});
    gsap.to('.backgroundChange2', {backgroundColor: '#E4FFFE', duration: 8})
    display.style.color = '#f1f1f1';
    display.style.fontWeight = '300';
    history.style.color = '#FEFFEC';
}

theme2.onclick = () => {
    gsap.to("body", {backgroundImage: 'linear-gradient(to top, #ffce00, #fcd751, #fae07e, #f8e8a8, #f6efd0)', duration: 6});
    gsap.to('.calculator', {backgroundColor: '#FBFFB2', duration: 7});
    gsap.to('.backgroundChange1', {backgroundColor: '#ffb86b', duration: 10});
    gsap.to('.backgroundChange2', {backgroundColor: '#ffd66b', duration: 8});
    display.style.color = 'black';
    display.style.fontWeight = '700';
    history.style.color = 'grey';
    /*
    setTimeout( function() { 
        allOperators.setAttribute("class", "tema2");
    }, 3000) */
}

theme3.onclick = () => {
    gsap.fromTo("body", {backgroundImage:'#bdc3c7' }, {backgroundImage: 'linear-gradient(to right bottom, #00ff07, #54ff42, #77ff61, #91ff7c, #a8ff94)', duration: 6});
    gsap.to('.calculator', {backgroundColor: '#d0e8f2', duration: 7});
    gsap.to('.backgroundChange1', {backgroundColor: '#00A585', duration: 10});
    gsap.to('.backgroundChange2', {backgroundColor: '#50DCBA', duration: 8});
    display.style.color = 'black';
    display.style.fontWeight = '700';
    history.style.color = 'grey';
}

clear.onclick = () => {
    displayVal = "0";
    history.innerText = "";
    display.innerHTML = displayVal;
}


deleteBtn.onclick = () => {
    let displayContent = display.innerText.length;
    displayVal = displayVal.substr(0, displayContent-1);

    if (displayVal === "") {
        displayVal = "0";
    }

    display.innerText = displayVal; 
    console.log(display.innerText)
} 



decimal.onclick = () => {
    if(!displayVal.includes("."))
        displayVal += "."
    display.innerText = displayVal;
}

function performCalculation(clickedOperator) {
    let element = clickedOperator.target.innerText;

    switch(element){
        case "+":
            upperNums = displayVal;
            history.innerText = upperNums + " +";
            displayVal = "";
            display.innerText = displayVal;
        
            numbersToCalculate.push(upperNums);
            numbersToCalculate.push("+");
        break;

        case "−":
            upperNums = displayVal;
            history.innerText = upperNums + " -";
            displayVal = "";
            display.innerText = displayVal;

            numbersToCalculate.push(upperNums);
            numbersToCalculate.push("-");
        break;

        case "✕":
            upperNums = displayVal;
            history.innerText = upperNums + " x";
            displayVal = "";
            display.innerText = displayVal;
            
            numbersToCalculate.push(upperNums);
            numbersToCalculate.push("*");
        break;

        case "/":
            upperNums = displayVal;
            history.innerText = upperNums + " /";
            displayVal = "";
            display.innerText = displayVal;
            
            numbersToCalculate.push(upperNums);
            numbersToCalculate.push("/");
        break;

        case "=":
            numbersToCalculate.push(displayVal);
            let calculate = eval(numbersToCalculate.join(' '));
            displayVal = calculate;
            history.innerText = "";
            display.innerText = displayVal;
            numbersToCalculate = [];
            console.log(numbersToCalculate);
        break;
    }
}

function updateDisplay(clickedElement) {
    let buttonText = clickedElement.target.innerText;
    if (displayVal === "0")
        displayVal = "";

    if(displayVal <= count)
        displayVal += buttonText;
        display.innerText = displayVal;
}

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', updateDisplay, false);
}


for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', performCalculation, false);
}
