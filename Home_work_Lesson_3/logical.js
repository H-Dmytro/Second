// Logical "&&" operation.
function accessByAge() {
    const age = 90;
    if ( age <= 1 && age > 0) {
        console.log ("Baby");
    } else if ( age <= 12 && age > 1) {
        console.log ("Child");
    } else if ( age <= 19 && age > 13) {
        console.log ("Teenager");
    } else if ( age <= 21 && age > 19) {
        console.log ("Juvenile");
    } else if ( age <= 45 && age > 21) {
        console.log ("Young age");
    } else if ( age <= 60 && age > 45) {
        console.log ("Middle age");
    } else if ( age <= 75 && age > 60) {
        console.log ("Old age");
    } else if ( age >= 75) {
        console.log ("Long_lived age");
    }
}
// Logical "||" operation.
function accessByName() {
    let name = "Dima";
    let age1 = 16 ;
    if ( (name === "Dima" || name === "Alex") && age1 < 18) {
        console.log ("Go to do home work");
    } else if ((name === "Yehor" || name === "Inna") && age1 >= 18) {
        console.log ("Hello parents");
    } else {
        console.log ("You are guest");
    }
}
// Logical "!" and "!!" and "??" operation.
function accessByName2() {
    const name = "Dimja";
    const age1 = 20 ;
    if ( (name === "Dima" || name === "Alex" ) && age1 < 18) {
        console.log ("Go to do home work");
    } else if ((name === "Yehor" || name === "Inna") && age1 >= 18) {
        console.log ("Hello parents");
    } else if (!!(name === "Dima" || name === "Alex" || name === "Yehor" || name === "Inna")) {
        console.log ("You are guest");
    }
}
function checkUserStatus(){
    const status = null;
    const check = (!status??true);
    console.log(check);
}
accessByAge();
accessByName();
accessByName2();
checkUserStatus();
