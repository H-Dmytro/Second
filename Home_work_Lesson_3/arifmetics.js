function tasksWithVars() {
    const a = 10;
    const b = 2; 
    result_plus = a + b;
    result_multiplication = a * b;
    result_divison = a / b;
    result_substraction = a - b;

    console.log(result_plus, result_divison, result_multiplication, result_substraction)
}
function variables() { 
    let str1 = `Hellow ` ;
    let str2 = `World` ;
    console.log(str1 + str2)
}
function logicalType() {

    const booleanVar = false;
    const undefinedVar = undefined;

    console.log (booleanVar, undefinedVar)
}

function changesType() {

    const change1 = `12`;
    let change2 = Number(change1);

    console.log (change2)
}

function arithmeticalOperators() {

    var num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    var num2 = num;


    console.log (num, num2++, num2++,num2--,num2)
}
function ifOperators() {

    var num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    var num2 = num;


    console.log (num, num2++, num2++,num2--,num2)
}


tasksWithVars();
variables();
logicalType();
changesType()
arithmeticalOperators()
