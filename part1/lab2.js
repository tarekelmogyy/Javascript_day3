let result;
let number1 = Number(prompt("Enter first number"));
let operator = prompt("Enter operator ( either + , - , * , / or % ):");
let number2 = Number(prompt("Enter Second Number"));
let newNumber;

switch(operator){
    case '+':
        result = number1 + number2;
        alert(`The sum result is ${number1} + ${number2} = ${result}`);    //sum operation
        break;
    case '-':
        result = number1 - number2;
        alert(`The subtraction result is ${number1} - ${number2} = ${result}`);    //subtraction operation
        break;
    case '*':
        result = number1 * number2;
        alert(`The multiplaction result is ${number1} * ${number2} = ${result}`);    //multiplaction operation
        break;
    case '/':
        result = number1 / number2;
        alert(`The divition result is ${number1} / ${number2} = ${result}`);         //divition operation
        break;                                                                       
    case '%':
        result = number1 % number2;
        alert(`The divition result is ${number1} % ${number2} = ${result}`);      //modulus operation
        break;
    default:
        alert("Invalid operator");
}

