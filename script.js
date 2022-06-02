
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
