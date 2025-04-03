import { IApiService } from '../services/interfaces/i-api.services';
import { JokeDto } from '../dtos/jokes-api/jokes.dto';

export class JokesApi {
    public constructor(private apiService: IApiService) {}
    public async getRandomJoke(): Promise<JokeDto> {
        const response = await this.apiService.get('/random');
        if (!response.ok) throw new Error(`Failed to fetch random joke: ${response.statusText}`);
        return await response.json();
    }
    public async getTenRandomJokes(): Promise<JokeDto[]> {
        const response = await this.apiService.get('/ten');
        if (!response.ok) throw new Error(`Failed to fetch ten jokes: ${response.statusText}`);
        return await response.json();
    }
    public async getTenRandomTypeJokes(): Promise<JokeDto[]> {
        const response = await this.apiService.get('/programming/ten');
        if (!response.ok) throw new Error(`Failed to fetch ten programming jokes: ${response.statusText}`);
        return await response.json();
    }
    public async getJokeById(jokeId : number): Promise<JokeDto> {
        const response = await this.apiService.get(`/${jokeId}`);
        if (!response.ok) throw new Error(`Failed to fetch ten programming jokes: ${response.statusText}`);
        return await response.json();
    }
}
