// 4)create a display field and fill it with some dummy numbers to get it looking good.
// 5) create a function that will populate the display when clicking number buttons.
let displayField = document.querySelector(".mainDisplay");
let numDivs = document.querySelectorAll(".num");
let opDivs = document.querySelectorAll(".op");
let eqlBtn = document.querySelector(".equalBtn");
let clrBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
displayField.style.color = "lightgray";

let values = {
  "value1": "",
  "operator": "",
  "value2": ""
};

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
  //space for console.log if needed to troubleshoot
  });
});


//Adds eventlistener to every operator button and performs operations simultaneously 
opArray.forEach(element => {
  element.addEventListener("click", (event) => {
    if (!hasValues) {
      values.operator = event.target.textContent;
      displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
      hasValues = true;

    } else {
      operate(values.operator, Number(values.value1), Number(values.value2));
      values.operator = event.target.textContent;
      displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
    };
  //space for console.log if needed to troubleshoot
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
});


//Listens for click on Clear button,
clrBtn.addEventListener("click", (event) => {
  clear(values);
  displayField.textContent = "";
  runningTotal = [];
  hasValues = false;
  updatingDisplay.textContent = "";
});


//Listens for clicks on Delete button.
deleteBtn.addEventListener("click", (event) => {
  if ((values.value2 === "") && (values.operator === "")) {
    values.value1 = values.value1.slice(0,-1);
    if(values.value1 === ""){
      hasValues = false;
    };
    displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;
  } else if ((values.value2 === "") && (values.operator !== "")) {
    values.operator = "";
    displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;

    
  } else {
    values.value2 = values.value2.slice(0,-1);
    displayField.textContent = values.value1 + " " + values.operator + " " + values.value2;

  }
})















//1) create functions that take two numbers as args and add, subtract, multiply or divide them.
function add(num1, num2){
    let result = num1 + num2;
    result = roundToTen(result);
    result = result.toString();
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function subtract(num1, num2){
    let result =  num1 - num2;
    result = roundToTen(result);
    result = result.toString();
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function multiply(num1, num2){
    let result =  num1 * num2;
    result = roundToTen(result);
    result = result.toString();
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};

function divide(num1, num2){
    if (num2 === 0) {
      alert("YOU SHALL NOT DIVIDE BY ZERO!")
      clear(values);
      displayField.textContent = "";
      
    } else {
      let result =  num1 / num2;
      result = roundToTen(result);
      result = result.toString();
      clear(values);
      values.value1 = result;
      hasValues = true;
      displayField.textContent = result;
      
    }

};

function percentage(num1, num2){
    let result = (num1/ 100) * num2;
    result = roundToTen(result);
    result = result.toString();
    clear(values);
    values.value1 = result;
    hasValues = true;
    displayField.textContent = result;
};


function clear(obj){
  obj.value1 = "";
  obj.value2 = "";
  obj.operator = "";
};

//rounds to the tenth decimal if necessary 
function roundToTen(num) {
  return +(Math.round(num + "e+10")  + "e-10");
}


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
        case "x":
          //Statements executed when the
          //result of expression matches "*"
          multiply(num1, num2);
          break;
        case "??":
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

