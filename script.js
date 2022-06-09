// 4)create a display field and fill it with some dummy numbers to get it looking good.
// 5) create a function that will populate the display when clicking number buttons.
let displayField = document.querySelector(".mainDisplay");
let divs = document.querySelectorAll(".btn");
let displayNumber;

let values = {
  "value1": "",
  "operator": "",
  "value2": ""
};


// 7)When the user presses an operator, you have to store the first value and which operator was selected. Lastly you have to run the 
//operate() function when user presses the equals (=) key.


//create array from array like node list
divsArray = Array.from(divs);

divsArray.forEach((el) => {
  // listen for a click and save text content as value
  el.addEventListener("click", (event) => {
    displayField.textContent = event.target.textContent;
 
    
    if((values.value1 !== "") && (values.operator !== "") && (event.target.className === "btn num")){
      values.value2 += event.target.textContent;
    }else if((values.value1 !== "") && (event.target.className === "btn")){
      values.operator = event.target.textContent;
    }else if(event.target.className === "btn num") {
      values.value1 += event.target.textContent;
      
    };

    if((event.target.className === "btn equalBtn") && (values.value1 !== "") && (values.value2 !== "") && (values.operator !== "")) {
      operate(values.operator, Number(values.value1), Number(values.value2));
      clear(values);
    };



    console.log(values);





  });
});


//1) create functions that take two numbers as args and add, subtract, multiply or divide them.
function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
    return result;
};

function subtract(num1, num2){
    let result =  num1 - num2;
    console.log(result);
    return result;
};

function multiply(num1, num2){
    let result =  num1 * num2;
    console.log(result);
    return result;
};

function divide(num1, num2){
    let result =  num1 / num2;
    console.log(result);
    return result;
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
        default:
          //Statements executed when none of
          //the values match the value of the expression
          alert("Not a valid operator!");
          break;
      };
      
};


function clear(obj){
  obj.value1 = "";
  obj.value2 = "";
  obj.operator = "";
};
