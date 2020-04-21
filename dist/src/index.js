"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * foolish function
 * @param msg  my foolish message
 */
function foo(msg) {
    console.log(msg);
}
exports.foo = foo;
function add(value_0, value_1) {
    return value_0 + value_1;
}
exports.add = add;
/**
 *
 */
/**
 * @class lets check if this show up in the doc
 */
class FakeClass {
    /**
     * Fake class represent a fake class object
     * @param value  the startup value in the constructor
     */
    constructor(value) {
        this.value = 0;
        this.value = value;
    }
    /**
     * fake mylog function
     * @param msg : fake message
     */
    static mylog(msg) {
        console.log(msg);
    }
    /**
     * static method to add 2 numbers
     * @param value_0
     * @param value_1
     */
    static static_add(value_0, value_1) {
        return value_0 + value_1;
    }
    /**
     * add value ( does it show in the doc ?? )
     * @param added  the value to add
     * @param pouet __deprecated__ blalbalbllbab
     * @return  the added value of blablalballa
     */
    add(added, pouet) {
        return this.value + added;
    }
}
exports.FakeClass = FakeClass;
