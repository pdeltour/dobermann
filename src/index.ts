


/**
 * foolish function 
 * @param msg  my foolish message 
 */
export function foo(msg: string) {
    console.log(msg);
}


export function add(value_0: number, value_1: number): number {
    return value_0 + value_1;
}

/**
 * 
 */
/**
 * @class lets check if this show up in the doc 
 */
export class FakeClass {

    private value: number = 0;

    /**
     * Fake class represent a fake class object 
     * @param value  the startup value in the constructor
     */
    constructor(value: number) {
        this.value = value;
    }

    /**
     * fake mylog function 
     * @param msg : fake message
     */
    static mylog(msg: string) {
        console.log(msg)
    }

    /**
     * static method to add 2 numbers
     * @param value_0 
     * @param value_1 
     */
    static static_add(value_0: number, value_1: number): number {
        return value_0 + value_1;
    }


    /**
     * add value ( does it show in the doc ?? )
     * @param added  the value to add
     * @param pouet __deprecated__ blalbalbllbab 
     * @return  the added value of blablalballa
     */
    add(added: number, pouet: number): number {
        return this.value + added;
    }


}

