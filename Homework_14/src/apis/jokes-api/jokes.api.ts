import { IApiService } from '../../services/interfaces/i-api.services';
import { JokeDto } from '../../dtos/jokes-api/jokes.dto';

export class JokesApi {
    public constructor(private apiService: IApiService) {}

    // Fetch a random joke
    public async getRandomJoke(): Promise<JokeDto> {
        const response = await this.apiService.get('/random');
        if (!response.ok) throw new Error(`Failed to fetch random joke: ${response.statusText}`);
        return await response.json();
    }

    // Fetch ten random jokes
    public async getTenRandomJokes(): Promise<JokeDto[]> {
        const response = await this.apiService.get('/random_ten');
        if (!response.ok) throw new Error(`Failed to fetch ten jokes: ${response.statusText}`);
        return await response.json();
    }
}
