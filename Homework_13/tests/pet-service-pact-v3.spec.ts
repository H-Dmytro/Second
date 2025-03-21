import { GetPetIdService } from '../src/services/get-pet-id.service';
import { MatchersV3, PactV3, Verifier} from '@pact-foundation/pact';
import { PetDto } from '../src/models/pet.dto';
import { expect } from 'chai';
import path from 'path';

// Описуємо тести для PetService
describe('PetService', () => {
    let petService: GetPetIdService;

    // Ініціалізуємо Pact для споживача та постачальника
    const provider = new PactV3({
        consumer: 'PetService-v3-consumer', // Ім'я споживача
        provider: 'PetService-v3-provider' // Ім'я постачальника
    });

    // Дані-очікуваний приклад відповіді від сервера
    const perResponseExample: Partial<PetDto> = {
        id: 5,
        category: {
            id: 0,
            name: 'string'
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
            {
                id: 0,
                name: 'string'
            }
        ],
        status: 'string'
    } as unknown as PetDto;

    // Описуємо тіло відповіді з використанням MatchersV3
    const expectedBody = MatchersV3.like(perResponseExample);

    // Тести для Pact V3
    describe('Consumer tests using Pact V3', () => {
        // Тест: перевіряє, чи повертає сервіс очікувану відповідь
        it('Pet service return expected response', () => {
            provider
                .given('Pet with id exists') // Попередній стан
                .uponReceiving('A request to get pet by id') // Опис запиту
                .withRequest({
                    method: 'GET', // Метод запиту
                    headers: {
                    // 'x-api-key': '1234', // Токен API
                        accept: 'application/json'
                    },
                    path: '/v2/pet/5' // Шлях до ресурсу
                })
                .willRespondWith({
                    status: 200, // Очікуваний статус відповіді
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: expectedBody // Очікуване тіло відповіді
                });

            return provider.executeTest(async (mockPetService) => {
            // Ініціалізуємо сервіс з використанням макетного сервера
                petService = new GetPetIdService(mockPetService.url);

                // Викликаємо метод сервісу та отримуємо відповідь
                const filteredResponse = await petService.getPetById('5');

                // Очікування: відповідь повинна містити певні ключі
                expect(filteredResponse).to.contain.keys('id', 'category', 'name', 'photoUrls', 'tags', 'status');

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

    describe('PactV3 PetsStore Provider Verification', () => {
        it('validates the expectations of Matching Service', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io',
                pactUrls: [path.resolve(process.cwd(), './pacts/PetService-v3-consumer-PetService-v3-provider.json')]
            })
                .verifyProvider();
        });
    });
});
