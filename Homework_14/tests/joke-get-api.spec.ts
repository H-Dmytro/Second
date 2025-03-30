import { expect } from 'chai';
import { FetchApiService } from '../src/services/fetch-api.services';
import { JokesApi } from '../src/apis/jokes-api/jokes.api';

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
        jokes.forEach(joke => {
            expect(joke).to.have.property('id');
            expect(joke).to.have.property('type');
            expect(joke).to.have.property('setup');
            expect(joke).to.have.property('punchline');
        });
    });
    it('should fetch 10 jokes of type programming', async () => {
        const response = await fetchApi.get('/programming/ten');
        const jokes = await response.json();
        expect(response.status).to.equal(200);
        expect(jokes).to.be.an('array').that.has.lengthOf(10);
        jokes.forEach((joke: { type: any; }) => expect(joke.type).to.equal('programming'));
    });
    it('should fetch a joke by a random ID', async () => {
        const randomId = Math.floor(Math.random() * 100);
        const response = await fetchApi.get(`/${randomId}`);
        const joke = await response.json();
        expect(response.status).to.equal(200);
        expect(joke).to.have.property('id').that.is.a('number');
        expect(joke).to.have.property('setup').that.is.a('string');
        expect(joke).to.have.property('punchline').that.is.a('string');
    });
    it('should fetch the joke by ID=1 and validate response structure', async () => {
        const response = await fetchApi.get('/1');
        const joke = await response.json();
        expect(response.status).to.equal(200);
        expect(joke).to.have.property('id', 1);
        expect(joke).to.have.property('type', 'general');
        expect(joke).to.have.property('setup').that.is.a('string');
        expect(joke).to.have.property('punchline').that.is.a('string');
    });
});
