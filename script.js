// 4)create a display field and fill it with some dummy numbers to get it looking good.
// 5) create a function that will populate the display when clicking number buttons.
let displayField = document.querySelector(".mainDisplay");
let numDivs = document.querySelectorAll(".num");
let opDivs = document.querySelectorAll(".op");
let eqlBtn = document.querySelector(".equalBtn");
let updatingDisplay = document.querySelector(".updatingDisplay");
let clrBtn = document.querySelector(".clear");

let values = {
  "value1": "",
  "operator": "",
  "value2": ""
};

let runningTotal = [];



/*     Created a boolean,and put its value to false.
Looped over the numbers
If, the boolean value is true, store the number in the second variable
Else, store the number in the first variable. (Since the boolean will 
remain false for the first variable, the number is going to store in the first variable by default) */
hasValues = false;

numArray = Array.from(numDivs);
opArray = Array.from(opDivs);
// Adds eventlistener to each numbers button and saves values in object
numArray.forEach(Element => {
  Element.addEventListener("click", (event) => {

    if(hasValues){
      values.value2 += event.target.textContent;
      displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
    }else {
      values.value1 += event.target.textContent;
      displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
    };
    console.log(values);
    console.log(runningTotal);
  });
});
//Adds eventlistener to ever operator button and performs operations simultaneously 
opArray.forEach(element => {
  element.addEventListener("click", (event) => {
    if (!hasValues) {
      values.operator = event.target.textContent;
      displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
      hasValues = true;

    } else {
      operate(values.operator, Number(values.value1), Number(values.value2));
      displayField.textContent = values.value1;
      values.operator = event.target.textContent;
      updatingDisplay.textContent = values.operator;
    };
    console.log(values);
    console.log(runningTotal);
  }) 
});
//Listens for click on equal button.
eqlBtn.addEventListener("click", (event) => {
  if (hasValues && (values.value2 !== "")) {
    operate(values.operator, Number(values.value1), Number(values.value2));
  } else {
    displayField.textContent = values.value1;
  };
  updatingDisplay.textContent = "";
  console.log(values);
  console.log(runningTotal);
});
//Listens for click on Clear button,
clrBtn.addEventListener("click", (event) => {
  clear(values);
  displayField.textContent = "";
  runningTotal = [];
  hasValues = false;
  updatingDisplay.textContent = "";
  console.log(values);
  console.log(runningTotal);
});













//1) create functions that take two numbers as args and add, subtract, multiply or divide them.
function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
    runningTotal.push(result);
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function subtract(num1, num2){
    let result =  num1 - num2;
    console.log(result);
    runningTotal.push(result);
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function multiply(num1, num2){
    let result =  num1 * num2;
    console.log(result);
    runningTotal.push(result);
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function divide(num1, num2){
    let result =  num1 / num2;
    console.log(result);
    runningTotal.push(result);
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function percentage(num1, num2){
    let result = (num1/ 100) * num2;
    console.log(result);
    runningTotal.push(result);
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};


//2) create a new operate function that takes 3 args. An operator and two numbers. This function will then evoke functions
//that were created in step 1.

function operate (operator, num1, num2){
    switch (operator) {
        case "+":
          //Statements executed when the
          //result of expression matches "+"
          add(num1, num2);
          break;
        case "-":
          //Statements executed when the
          //result of expression matches "-"
          subtract(num1, num2);
          break;
        case "*":
          //Statements executed when the
          //result of expression matches "*"
          multiply(num1, num2);
          break;
        case "/":
          //Statements executed when the
          //result of expression matches "/"
          divide(num1, num2);
          break;
        case "%":
          //Statements executed when the
          //result of expression matches "%"
          percentage(num1, num2);
          break;
    };
      
};


function clear(obj){
  obj.value1 = "";
  obj.value2 = "";
  obj.operator = "";
};
