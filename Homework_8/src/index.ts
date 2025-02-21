import { Manager } from './abstraction';
const emp: Manager = new Manager('Dmytro');
emp.display();

const emp2: Manager = emp.find('Boss');
emp2.display();

import { Person } from './class';
const person1 = new Person('Dmytro', 30, 'Male', { numberPhone:1234555055 });

console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.checkIfAdult());
console.log(person1.getNumber());

person1.updateNumber({ numberPhone: 99999 });
console.log(person1.getNumber());

// Interfaces
import { Results } from './interfaces';
export async function getJson(): Promise<Results> {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const json = await response.json() as Results;
    return json;
}
import { ArithmeticAveragePopulation, allNationalId } from './interfaces';
(async () => {
    const results = await getJson();
    console.log(results.data[0]);
    const allNationalIds = allNationalId(results.data);
    console.log(allNationalIds);
    console.log(results.data[0]['ID Nation']);
    const averagePopulationCalculator = new ArithmeticAveragePopulation(results.data);
    console.log('Average population:', averagePopulationCalculator.averagePopulation);
})();
