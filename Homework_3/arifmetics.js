function tasksWithVars() {
    const a = 10;
    const b = 2;
    result_plus = a + b;
    result_multiplication = a * b;
    result_division = a / b;
    result_substraction = a - b;

    console.log(result_plus, result_division, result_multiplication, result_subtraction);
}
function variables() {
    const str1 = `Hellow ` ;
    const str2 = `World` ;
    console.log(str1 + str2);
}
function logicalType() {

    const booleanVar = false;
    const undefinedVar = undefined;

    console.log (booleanVar, undefinedVar);
}

function changesType() {

    const change1 = `12`;
    const change2 = Number(change1);

    console.log (change2);
}

function arithmeticalOperators() {

    let num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    let num2 = num;


    console.log (num, num2++, num2++,num2--,num2);
}
function ifOperators() {

    let num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    let num2 = num;


    console.log (num, num2++, num2++,num2--,num2);
}

tasksWithVars();
variables();
logicalType();
changesType();
arithmeticalOperators();
ifOperators();