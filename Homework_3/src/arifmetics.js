function tasksWithVars() {
    const a = 10;
    const b = 2;
    const resultPlus = a + b;
    const resultMultiplication = a * b;
    const resultDivision  = a / b;
    const resultSubtraction = a - b;

    console.log(resultPlus, resultMultiplication,resultDivision, resultSubtraction);
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