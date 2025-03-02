import { Person, PhoneNumber } from '../src/class';
import { assert as expect } from 'chai';

describe('Person', () => {
    let person: Person;

    beforeEach(() => {
        // Arrange
        const phoneNumber: PhoneNumber = { numberPhone: 1234555055 };
        person = new Person('Dmytro', 30, 'Male', phoneNumber);
    });

    it('Should update the phone number', () => {
        // Arrange
        const newNumber: PhoneNumber = { numberPhone: 99999 };

        // Act
        person.updateNumber(newNumber);
        const updatedNumber = person.getNumber();

        // Assert
        expect.strictEqual(updatedNumber, 99999);
    });

    it('Should return the correct name', () => {
        // Act
        const name = person.getName();

        // Assert
        expect.strictEqual(name, 'Dmytro');
    });

    it('Should return the correct age', () => {
        // Act
        const age = person.getAge();

        // Assert
        expect.strictEqual(age, 30);
    });

    it('Should return the correct gender', () => {
        // Act
        const gender = person.getGender();

        // Assert
        expect.strictEqual(gender, 'Male');
    });

    it('Should return the correct phone number', () => {
        // Act
        const phoneNumber = person.getNumber();

        // Assert
        expect.strictEqual(phoneNumber, 1234555055);
    });
});
