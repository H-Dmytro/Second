import sinon from 'sinon';
import { Person } from '../src/class';
import { expect } from 'chai';

describe('Person stubbing test', () => {
    describe('Person stubbing test', () => {
        let person: Person;
        let getNameStub: sinon.SinonStub;
        let getAgeStub: sinon.SinonStub;
        let getGenderStub: sinon.SinonStub;
        beforeEach(() => {
            person = new Person('Dmytro', 30, 'Male', { numberPhone: 1234555055 });
            getNameStub = sinon.stub(person, 'getName').returns('TestName');
            getAgeStub = sinon.stub(person, 'getAge').returns(30);
            getGenderStub = sinon.stub(person, 'getGender').returns('Male');
        });

        afterEach(() => {

            sinon.restore();
        });

        it('Should return the correct name', () => {
            const name = person.getName();

            expect(getNameStub.calledOnce).to.be.true;
            expect(name).to.equal('TestName');
        });
        it('Should return the failed test', () => {
            const name = person.getName();

            expect(getNameStub.calledOnce).to.be.true;
            expect(name).to.equal('NotTestName');
        });
        it('Should return the correct age', () => {
            const age = person.getAge();

            expect(getAgeStub.calledOnce).to.be.true;
            expect(age).to.equal(30);
        });
        it('SHould return the correct gender', () => {
            const gender = person.getGender();
            expect(getGenderStub.calledOnce).to.be.true;
            expect(gender).to.equal('Male');
        });
    });
});
