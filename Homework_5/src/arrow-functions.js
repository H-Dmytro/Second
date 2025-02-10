const numbers = [];
for (let n = 0; n < 10; n++) {
    numbers.push(n);
};
function sumArray(numbersSum){
    let sum = 0;
    for (const num of numbersSum){
        sum += num;
    }
    return sum;
};
///console.log(numbers);
console.log(sumArray(numbers));
const stringsArray = ['BMW', 'Tesla', 'Mazda', 'KIA', 'Opel', 'Ford'];
const catalog = (stringsArray, numbers) => {
    stringsArray.forEach((str, index) => {
        console.log("Car label: " + str, "Car id: " + numbers[index]);
    });
};
catalog (stringsArray, numbers);
