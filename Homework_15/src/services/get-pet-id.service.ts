import { PetDto } from '../models/pet.dto';

// Сервіс для отримання інформації про домашніх улюбленців
export class GetPetIdService {
    // Заголовки для запитів
    private _headers = {
        'x-api-key': this._token, // Токен API
        accept: 'application/json' // Приймається JSON-формат
    };

    // Конструктор: приймає базовий URL та токен
    public constructor(private _baseUrl: string, private _token: string) {}

    // Метод для отримання домашніх улюбленців за ID
    public async getPetById(): Promise<PetDto[]> {
        const response = await fetch(`${this._baseUrl}/pet`, {
            headers: this._headers
        });

        // Повертаємо результат у форматі JSON
        return await response.json();
    }
}
