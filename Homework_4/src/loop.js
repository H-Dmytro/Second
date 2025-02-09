
for (let i = 0; i<10; i++) {
    console.log(i);
}

let a  = 0;
let b = '';
while (a < 10) {
    a += 1;
    b = b + a + ` `;
}
console.log(b);

for (const number of b) {
    console.log(number);
}

for (let i = 100; i >= 0; i-=10) {
    console.log(i);
}

let n = 100;
let result = '';
do {
    n-=10;
    result = result + n + ` `;
} while (n > 0);

console.log(result);
