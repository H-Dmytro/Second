const numbers: number[] = [];
for (let n = 0; n < 10; n++) {
    numbers.push(n);
};
function sumArray(numbersSum: number[]): number {
    let sum = 0;
    for (const num of numbersSum){
        sum += num;
    }
    return sum;
};
///console.log(numbers);
console.log(sumArray(numbers));


const stringsArray = ['BMW', 'Tesla', 'Mazda', 'KIA', 'Opel', 'Ford'];
function processArrays (stringsArray2: string[], numbers2: number[]) : void {
    stringsArray2.forEach((str, index) => {
        console.log('Car label: ' + str, 'Car id: ' + numbers2[index]);
    });
}
processArrays(stringsArray, numbers);
