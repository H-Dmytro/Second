class Person {
    public name: string;
    public age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet(): void {
        console.log(`Привіт,я ${this.name} і мені ${this.age} років.`);
    }

    public haveBirthday(): void {
        this.age++;
        console.log(`З днем народження, ${this.name}! Тепер тобі ${this.age} років.`);
    }
}

class Car {
    public make: string;
    public model: string;
    public year: number;

    public constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public start(): void {
        console.log(`${this.make} ${this.model} ${this.year} завівся.`);
    }

    public drive(): void {
        console.log(`${this.make} ${this.model} працює.`);
    }
}

const person = new Person('Dmytro', 32);

const car = new Car('KIA', 'Optima', 2013);

person.greet();
person.haveBirthday();

car.start();
car.drive();
