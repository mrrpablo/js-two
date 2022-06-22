function myFunction() {
    var result;
    var number1 = parseInt(prompt("Enter number 1"));
    var number2 = parseInt(prompt("Enter number 2"));
    var oper = prompt("Enter operator");

    if (oper == "+"){
        result = number1 + number2;
    } else if (oper == "-"){
        result = number1 - number2;
    } else if (oper == "*"){
        result = number1 * number2;
    } else if (oper == "/"){
        result = number1 / number2;
    }

    alert('the result is: ' + result);
}

myFunction();



