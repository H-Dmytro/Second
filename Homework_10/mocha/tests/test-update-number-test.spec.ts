import { Person, PhoneNumber } from '../src/class';
import { assert as expect } from 'chai';
import { assert as chaiExpect } from 'chai';

describe('Person', () => {
    let person: Person;

    beforeEach(() => {
        // Arrange
        const phoneNumber: PhoneNumber = { numberPhone: 1234555055 };
        person = new Person('Dmytro', 30, 'Male', phoneNumber);
    });

    it('should update the phone number', () => {
        // Arrange
        const newNumber: PhoneNumber = { numberPhone: 99999 };

        // Act
        person.updateNumber(newNumber);
        const updatedNumber = person.getNumber();

        // Assert (assert)
        expect.strictEqual(updatedNumber, 99999);

        // Assert (Chai)
        chaiExpect.equal(updatedNumber, 99999);
    });
});

import { Manager } from '../src/abstraction';

describe('Manager', () => {
    let manager: Manager;

    beforeEach(() => {
        // Arrange
        manager = new Manager('Dmytro');
    });

    it('should return a new Manager with the correct name', () => {
        // Act
        const newManager = manager.find('Boss');

        // Assert (assert)
        expect.strictEqual(newManager.name, 'Boss');

        // Assert (Chai)
        chaiExpect.equal(newManager.name, 'Boss');
    });
});
