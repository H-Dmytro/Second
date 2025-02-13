const numbersArrow: number[] = [];
for (let n = 0; n < 10; n++) {
    numbersArrow.push(n);
};
function sumArrayArrows(numbersArrowSum: number[]): number{
    let sum = 0;
    for (const num of numbersArrowSum){
        sum += num;
    }
    return sum;
};
///console.log(numbers);
console.log(sumArrayArrows(numbersArrow));
const stringsArrayArrows: string[] = ['BMW', 'Tesla', 'Mazda', 'KIA', 'Opel', 'Ford'];
const catalog = (stringsArray: string[], numbersArray: number[]) :void => {
    stringsArray.forEach((str, index) => {
        console.log('Car label: ' + str, 'Car id: ' + numbersArray[index]);
    });
};
catalog (stringsArrayArrows, numbersArrow);
