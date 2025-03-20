import { PetDto } from '../models/pet.dto';

// Сервіс для отримання інформації про домашніх улюбленців
export class GetPetIdService {
    private _headers: HeadersInit | undefined;
    // Заголовки для запитів

    // Конструктор: приймає базовий URL та токен
    public constructor(private _baseUrl: string, private _token: string) {}

    public async getPetById(id: string): Promise<PetDto> {
        const response = await fetch(`${this._baseUrl}/v2/pet/${id}`, {
            headers: this._headers
        });

        // Повертаємо результат у форматі JSON
        return await response.json();
    }
}
