import { GetPetIdService } from '../src/services/get-pet-id.service';
import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import { PetDto } from '../src/models/pet.dto';
import { expect } from 'chai';

// Описуємо тести для PetService
describe('PetService', () => {
    let petService: GetPetIdService;

    // Ініціалізуємо Pact для споживача та постачальника
    const provider = new PactV3({
        consumer: 'PetService-v3-consumer', // Ім'я споживача
        provider: 'PetService-v3-provider' // Ім'я постачальника
    });

    // Дані-очікуваний приклад відповіді від сервера
    const perResponseExample: Partial<PetDto[]> = [
        {
            id: 5,
            category: {
                id: 0,
                name: 'string'
            },
            name: 'doggie',
            photoUrls: [],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'string'
        } as unknown as PetDto
    ];

    // Описуємо тіло відповіді з використанням MatchersV3
    const expectedBody = MatchersV3.like(perResponseExample);

    // Тести для Pact V3
    describe('Consumer tests using Pact V3', () => {
        // Тест: перевіряє, чи повертає сервіс очікувану відповідь
        it('Pet service return expected response', () => {
            return provider
                .given('Pet with id exists') // Попередній стан
                .uponReceiving('A request to get pet by id') // Опис запиту
                .withRequest({
                    method: 'GET', // Метод запиту
                    headers: {
                        'x-api-key': '1234', // Токен API
                        accept: 'application/json'
                    },
                    path: '/pet' // Шлях до ресурсу
                })
                .willRespondWith({
                    status: 200, // Очікуваний статус відповіді
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody // Очікуване тіло відповіді
                });
        });

        // Тест: перевіряє функціональність клієнтського сервісу
        it('Run Pet service consumer test', () => {
            provider.executeTest(async (mockPetService) => {
                // Ініціалізуємо сервіс з використанням макетного сервера
                petService = new GetPetIdService(mockPetService.url, '1234');

                // Викликаємо метод сервісу та отримуємо відповідь
                const response = await petService.getPetById();

                // Фільтруємо відповідь за ID
                const filteredResponse = response.find(
                    (pet) => pet.id === perResponseExample[0]?.id
                );

                // Очікування: відповідь повинна містити певні ключі
                expect(filteredResponse).to.contain.keys(
                    'id',
                    'category',
                    'name',
                    'photoUrls',
                    'tags',
                    'status'
                );

                // Перевіряємо типи даних у відповіді
                expect(filteredResponse?.id).to.be.a('number');
                expect(filteredResponse?.category).to.be.a('object');
                expect(filteredResponse?.name).to.be.a('string');
                expect(filteredResponse?.photoUrls).to.be.a('array');
                expect(filteredResponse?.tags).to.be.a('array');
                expect(filteredResponse?.status).to.be.a('string');
            });
        });
    });
});
