import { assert as expect } from 'chai';
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

        // Assert
        expect.strictEqual(newManager.name, 'Boss');
    });
});
