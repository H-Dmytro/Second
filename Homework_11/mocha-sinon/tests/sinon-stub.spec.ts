import sinon from 'sinon';
import { Person } from '../src/class';
import { expect } from 'chai';

describe('Person stubbing test', () => {
    describe('Person stubbing test', () => {
        let person: Person;
        let getNameStub: sinon.SinonStub;

        beforeEach(() => {
            person = new Person('Dmytro', 30, 'Male', { numberPhone: 1234555055 });
            getNameStub = sinon.stub(person, 'getName').returns('TestName');
        });

        afterEach(() => {

            sinon.restore();
        });

        it('Should return the correct name', () => {
            const name = person.getName();

            expect(getNameStub.calledOnce).to.be.true;
            expect(name).to.equal('TestName');
        });
    });
});
