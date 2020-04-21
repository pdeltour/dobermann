


import { expect } from 'chai';

import { FakeClass, add } from '../index'




describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(4)).is.equal(-1);
        });

        ///////////////////////////////////////

        it('should add 2 numbers', function () {

            expect(add(1, 1)).is.equal(2);

        });

        ///////////////////////////////////////
        it('should add 2 numbers', function () {

            let toto = new FakeClass(1);

            expect(toto.add(1, 2)).is.equal(2);

        });

        ///////////////////////////////////////


    });

});





