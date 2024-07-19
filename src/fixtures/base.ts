/**
 * BaseFixture
 */
export default class BaseFixture {

    /**
     * Fixture name
     */
    public static NAME: string = "";

    /**
     * Constructor
     */
    constructor() {
        if (this.constructor === BaseFixture) {
            throw new Error("BaseFixture is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 
     * @param eArgs Extra arguments to pass to the fixture
     */
    public run(eArgs: string[]): void {
        throw new Error("Method not implemented.");
    }
}