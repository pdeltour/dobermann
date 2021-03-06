"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai_1.expect([1, 2, 3].indexOf(4)).is.equal(-1);
        });
    });
});
