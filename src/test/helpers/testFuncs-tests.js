import * as chai from 'chai';
const expect = chai.expect;

import TestFuncs from '../../app/helpers/testFuncs';

describe('the "TestFuncs" class', () => {

    it('has method "mutiply()"', () => {
        expect(new TestFuncs(7)).to.respondTo('mutiply');
    });

    it('has method "mutiply()" that returns 49', () => {
        expect(
            new TestFuncs(7).mutiply(7)
        ).to.eql(49);
    });
});
