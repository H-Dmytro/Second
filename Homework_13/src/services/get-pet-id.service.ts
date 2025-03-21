import { PetDto } from '../models/pet.dto';

// Сервіс для отримання інформації про домашніх улюбленців
export class GetPetIdService {
    private _headers: HeadersInit | undefined;
    private accept: 'application/json' | undefined;

    // Конструктор: приймає базовий URL та токен
    public constructor(private _baseUrl: string) {}

    public async getPetById(id: string): Promise<PetDto> {
        const response = await fetch(`${this._baseUrl}/v2/pet/${id}`, {
            headers: this._headers
        });

        // Повертаємо результат у форматі JSON
        return await response.json();
    }
}
