import { beforeEach, describe, expect, test } from '@jest/globals';

import { Manager } from '../src/abstraction';

describe('Manager', () => {
    let manager: Manager;

    beforeEach(() => {
        // Arrange
        manager = new Manager('Dmytro');
    });

    test('should return a new Manager with the correct name', () => {
        // Act
        const newManager = manager.find('Boss');

        // Assert
        expect(newManager).toBeInstanceOf(Manager);
        expect(newManager.name).toBe('Boss');
    });
});
