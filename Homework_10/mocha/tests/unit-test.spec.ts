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

import { ArithmeticAveragePopulation, Data } from '../src/interfaces';

describe('ArithmeticAveragePopulation', () => {
    it('should return a numerical average population', () => {
        // Arrange
        const testData: Data[] = [
            {
                'ID Nation': '1', Population: 331002651, Year: '2020', 'ID Year': 2020, Nation: 'Nation1', 'Slug Nation': 'nation1',
                results: ''
            },
            {
                'ID Nation': '2', Population: 327167434, Year: '2019', 'ID Year': 2019, Nation: 'Nation2', 'Slug Nation': 'nation2',
                results: ''
            }
        ];

        // Act
        const averagePopulationCalculator = new ArithmeticAveragePopulation(testData);
        const result = averagePopulationCalculator.averagePopulation;

        // Assert
        expect.strictEqual(typeof result, 'number');
        expect.typeOf(result, 'number');
    });
});


