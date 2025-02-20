export interface PhoneNumber {
    numberPhone: number;
}
class Person {
    private name: string;
    private age: number;
    private gender: string;
    private phoneNumber: PhoneNumber;

    public constructor(name: string, age: number, gender: string, phoneNumber: PhoneNumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;

    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getGender (): string {
        return this.gender;
    }
    public updateNumber(newNumber: PhoneNumber): void {
        this.phoneNumber = newNumber;
    }

    private isAdult(): boolean {
        return this.age >= 18;
    }

    public checkIfAdult(): string {
        return this.isAdult() ? `${this.name} is an adult.` : `${this.name} is not an adult.`;
    }

    public getNumber(): number {
        return this.phoneNumber.numberPhone;
    }
}

const person1 = new Person("Dmytro", 30, 'Male', { numberPhone:1234555055 });

console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.checkIfAdult());
console.log(person1.getNumber());

person1.updateNumber({ numberPhone: 99999 });
console.log(person1.getNumber());
