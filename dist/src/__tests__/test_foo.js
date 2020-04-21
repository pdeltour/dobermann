"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai_1.expect([1, 2, 3].indexOf(4)).is.equal(-1);
        });
        ///////////////////////////////////////
        it('should add 2 numbers', function () {
            chai_1.expect(index_1.add(1, 1)).is.equal(2);
        });
        ///////////////////////////////////////
        it('should add 2 numbers', function () {
            let toto = new index_1.FakeClass(1);
            chai_1.expect(toto.add(1, 2)).is.equal(2);
        });
        ///////////////////////////////////////
    });
});
