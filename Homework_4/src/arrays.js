const arr = ['QA', 'BE', 'FE','pm','UA/UX'];
console.log(arr);

arr.push('BA');
console.log(arr);

const sortedArrays = arr.sort();
console.log(sortedArrays);

const filteredArraysFirts = arr.filter(el => el.startsWith('F'));
console.log(filteredArraysFirts);

const lowerText = arr.map(el => el.toLowerCase());
console.log(lowerText);

const upperText = arr.map(el => el.toUpperCase());
console.log(upperText);

const findText = arr.includes('BE');
const findNumber = arr.includes(1);
console.log(findText || findNumber );
console.log(findText && findNumber );

const numberArr = [1, 30, 5, 60, 8, 10];

const sortedBiggest = numberArr.sort((a,b) => b-a );
console.log (sortedBiggest);

const filteredBy5 = numberArr.filter(a => a % 5 === 0);
console.log (filteredBy5);

const numberMap = numberArr.map(a => a * 2);
console.log (numberMap);


const diffenrentArraysType = [1, true, 'Freedom', 'QA', 'Middle', 18 , null];

const filteredArray = diffenrentArraysType.filter((el) => typeof el === 'string' );
console.log(filteredArray);

const combinedArr = arr.concat(numberArr && diffenrentArraysType );
console.log(combinedArr);

const findArr = combinedArr.find ((el) => typeof el === 'string' );
console.log(findArr);

const includedArr2 = combinedArr.includes  ('middle' );
console.log(includedArr2);
