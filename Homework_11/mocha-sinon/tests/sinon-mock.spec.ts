import { expect } from 'chai';
import sinon from 'sinon';
import { Manager } from '../src/abstraction';

describe('Manager tests', () => {
    const mockedManager = sinon.createStubInstance(Manager);
    const newManagerInstance: Manager = new Manager('Boss');

    beforeEach(() => {
        mockedManager.find.returns(newManagerInstance);
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('Manager instantiation', () => {
        it('should return a new Manager instance with the correct name when find is called', () => {
            const newManager = mockedManager.find('Boss');

            expect(newManager.name).to.be.equal('Boss');
            expect(mockedManager.find.calledOnceWith('Boss')).to.be.true;
            expect(mockedManager.find.calledTwice).to.be.false;
        });
    });
});
