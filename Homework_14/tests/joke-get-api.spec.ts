import { expect } from 'chai';
import { FetchApiService } from '../src/services/fetch-api.services';
import { JokesApi } from '../src/apis/jokes.api';

describe('The Get Joke API Tests', () => {
    const fetchApi = new FetchApiService('https://official-joke-api.appspot.com/jokes');
    const jokesApi = new JokesApi(fetchApi);

    it('should return a random joke with valid properties', async () => {
        const joke = await jokesApi.getRandomJoke();
        expect(joke).to.have.property('id').that.is.a('number');
        expect(joke).to.have.property('type').that.is.a('string');
        expect(joke).to.have.property('setup').that.is.a('string');
        expect(joke).to.have.property('punchline').that.is.a('string');
    });

    it('should return an array of 10 random jokes', async () => {
        const jokes = await jokesApi.getTenRandomJokes();
        expect(jokes).to.be.an('array').that.has.lengthOf(10);
        jokes.forEach((joke: any) => {
            expect(joke).to.have.property('id');
            expect(joke).to.have.property('type');
            expect(joke).to.have.property('setup');
            expect(joke).to.have.property('punchline');
        });
    });
    it('should fetch 10 jokes of type programming', async () => {
        const jokes = await jokesApi.getTenRandomTypeJokes();
        expect(jokes).to.be.an('array').that.has.lengthOf(10);
        jokes.forEach((joke: { type: any; }) => expect(joke.type).to.equal('programming'));
    });
    it('should fetch the joke by ID=1 and validate response structure', async () => {
        const joke = await jokesApi.getJokeById(1);
        expect(joke).to.have.property('id', 1);
        expect(joke).to.have.property('type', 'general');
        expect(joke).to.have.property('setup').that.is.a('string');
        expect(joke).to.have.property('punchline').that.is.a('string');
    });
});
